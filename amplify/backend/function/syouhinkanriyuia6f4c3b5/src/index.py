import csv
import json
import boto3
import uuid
from datetime import datetime
from boto3.dynamodb.conditions import Key, Attr
from decimal import Decimal
from io import BytesIO
import base64

# Define the DecimalEncoder class.
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super(DecimalEncoder, self).default(obj)

def handler(event, context):
    # Get the DynamoDB client.
    dynamodb = boto3.resource('dynamodb')

    # Get the Todo table.
    app_table = dynamodb.Table('syouhinkanri0623-staging')


    # If the request is a POST request, do the following.
    if event['httpMethod'] == 'POST':
        # Get the request body.
        body = json.loads(event['body'])

        # 新規作成の場合はこちら
        if body['action'] == 'create':
            # テーブルにデータを挿入する
            app_table.put_item(Item={
                'id': str(uuid.uuid4()),
                'title': body['title'],
                'description': body['description']
            })

        # UPDATE アクセスの場合はこちら
        elif body['action'] == 'update':
            # Update the Todo.
            app_table.update_item(Key={
                'id': body['id']
            }, UpdateExpression='SET title = :title, description = :description', ExpressionAttributeValues={
                ':title': body['title'],
                ':description': body['description']
            })

        # DELETE /{id} アクセスの場合はこちら
        elif body['action'] == 'delete':
            # Delete the Todo.
            app_table.delete_item(Key={
                'id': body['id']
            })

        elif body['action'] == 'excel_upload':

            csv_to_dynamodb_mapping = {
                '発注番号': 'B_OrderNumber',
                '入荷年月日': 'E_Date',
                '仕入先ｺｰﾄﾞ': 'G_SupplierCode',
                '仕入先正式名称': 'H_supplier',
                '商品ｺｰﾄﾞ': 'L_ItemCode',
                '商品正式名称': 'M_ItemName',
                '入荷数量': 'R_qaunty',
                '入荷単位名称': 'T_unit',
                '発注備考': 'AB_detail1',
                '明細備考': 'AC_detail2'
            }

            # Initialize counts
            update_count = 0
            insert_count = 0
            base64_excel = body['file']
            csv_data = base64.b64decode(base64_excel).decode('utf-8')
            csv_file = csv.reader(csv_data.splitlines())

            # Convert the CSV to a dictionary
            records = []
            raw_headers = next(csv_file)
            headers = [csv_to_dynamodb_mapping.get(header.strip(), None) for header in raw_headers]

            for row in csv_file:
                print(f"Raw row: {row}")
                record = {header: value for header, value in zip(headers, row) if header is not None}
                print(f"Uploading record: {record}")
                records.append(record)

                # Add uuid as the id field if not already present
                if 'id' not in record:
                    record['id'] = str(uuid.uuid4())

                # Skip records with empty or invalid 'E_Date' 
                try:
                    date_object = datetime.strptime(record['E_Date'], '%Y/%m/%d %H:%M')
                    record['E_Date'] = date_object.strftime('%Y/%m/%d %H:%M')
                except ValueError:
                    continue

                # Remove empty keys
                record = {k: v for k, v in record.items() if k}

                # Ensure 'B_OrderNumber' is not an empty string
                if 'B_OrderNumber' in record and not record['B_OrderNumber']:
                    continue  # Skip this record if 'B_OrderNumber' is empty

                # Check if the record already exists using scan
                scan_response = app_table.scan(
                    FilterExpression=Attr('B_OrderNumber').eq(record['B_OrderNumber']) & Attr('E_Date').eq(record['E_Date'])
                )

                if scan_response['Count'] > 0:
                    # The record exists, update it
                    app_table.update_item(
                        Key={
                            'id': scan_response['Items'][0]['id']
                        },
                        UpdateExpression="set B_OrderNumber=:on, E_Date=:ed, G_SupplierCode=:sc, H_supplier=:hs, L_ItemCode=:ic, M_ItemName=:in, R_qaunty=:rq, T_unit=:tu, AB_detail1=:d1, AC_detail2=:d2",
                        ExpressionAttributeValues={
                            ':on': record['B_OrderNumber'],
                            ':ed': record['E_Date'],
                            ':sc': record['G_SupplierCode'],
                            ':hs': record['H_supplier'],
                            ':ic': record['L_ItemCode'],
                            ':in': record['M_ItemName'],
                            ':rq': record['R_qaunty'],
                            ':tu': record['T_unit'],
                            ':d1': record['AB_detail1'],
                            ':d2': record['AC_detail2']
                        }
                    )
                    update_count += 1
                else:
                    # The record does not exist, insert it
                    app_table.put_item(Item=record)
                    insert_count += 1

            # Return the counts as a JSON object
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                },
                'body': json.dumps({
                    'insert_count': insert_count,
                    'update_count': update_count
                })
            }


        elif body['action'] == 'search_date':
            # Extract the date from the request
            search_date = body['date']

            # Query the table
            filter_expression = Attr('E_Date').eq(search_date)
            search_results = app_table.scan(FilterExpression=filter_expression)

            # Return the search results as JSON
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                },
                'body': json.dumps(search_results, cls=DecimalEncoder)
            }

    # GET /{id} アクセスの場合はこちら
    elif event['httpMethod'] == 'GET' and event.get('queryStringParameters') and 'id' in event['queryStringParameters']:
        # Get the Todo with the specified ID.
        todo = app_table.get_item(Key={
            'id': event['queryStringParameters']['id']
        })

        # Return the Todo as JSON.
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(todo, cls=DecimalEncoder)
        }

    # /GETアクセスの場合はこちら
    elif event['httpMethod'] == 'GET':
        # Get all Todos.
        app_table_datas = app_table.scan()

        # Return all Todos as JSON.
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(app_table_datas, cls=DecimalEncoder)
        }
