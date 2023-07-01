import json
import boto3
import uuid
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

        # Excel upload アクセスの場合はこちら
        elif body['action'] == 'excel_upload':
            # Assume the Excel file is sent as a base64 encoded string
            base64_excel = body['file']
            excel_data = base64.b64decode(base64_excel)
            excel_file = BytesIO(excel_data)

            # Read the Excel file with pandas
            df = pd.read_excel(excel_file)

            # Convert the dataframe to a JSON object
            json_data = df.to_json(orient='records')

            # Return the JSON data
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                },
                'body': json_data
            }

            # Insert each row from the 2nd row onward to DynamoDB
            # Commented out the following code
            # for index, row in df.iloc[1:].iterrows():
            #     item = {column: str(value) for column, value in row.iteritems()}
            #     app_table.put_item(Item=item)


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
