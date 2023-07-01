import json
import boto3
import uuid
from boto3.dynamodb.conditions import Key
from decimal import Decimal
import pandas as pd
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
            base64_excel = body['file']
            excel_data = base64.b64decode(base64_excel)
            excel_file = BytesIO(excel_data)
            df = pd.read_excel(excel_file, engine='openpyxl')

            # Convert the dataframe to a dictionary
            records = df.to_dict('records')

            # Initialize insert and update counts
            insert_count = 0
            update_count = 0

            for record in records:
                # Add uuid as the id field if not already present
                if 'id' not in record:
                    record['id'] = str(uuid.uuid4())

                # Change E_Date to ymd format
                record['E_Date'] = pd.to_datetime(record['E_Date'], unit='ms').strftime('%Y-%m-%d')

                # Check if the record already exists
                existing_item = app_table.query(
                    KeyConditionExpression=Key('B_OrderNumber').eq(record['B_OrderNumber']) & Key('E_Date').eq(record['E_Date'])
                )

                if existing_item['Count'] > 0:
                    # The record exists, update it
                    app_table.update_item(
                        Key={
                            'id': existing_item['Items'][0]['id']
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
