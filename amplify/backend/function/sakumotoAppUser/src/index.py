import json
import boto3
import uuid
from decimal import Decimal

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
    app_table = dynamodb.Table('sakumotoAppUser-master')

    # If the request is a POST request, do the following.
    if event['httpMethod'] == 'POST':
        # Get the request body.
        body = json.loads(event['body'])

        # If the request is to create a new Todo, do the following.
        if body['action'] == 'create':
            # Create the Todo.
            app_table.put_item(Item={
                'id': str(uuid.uuid4()),
                'user_id': body['user_id'],
                'employeeNumber': body['employeeNumber']
            })

        # If the request is to update an existing Todo, do the following.
        elif body['action'] == 'update':
            # Update the Todo.
            app_table.update_item(Key={
                'id': body['id']
            }, UpdateExpression='SET title = :user_id, employeeNumber = :employeeNumber', ExpressionAttributeValues={
                ':user_id': body['user_id'],
                ':employeeNumber': body['employeeNumber']
            })

        # If the request is to delete an existing Todo, do the following.
        elif body['action'] == 'delete':
            # Delete the Todo.
            app_table.delete_item(Key={
                'id': body['id']
            })

    # If the request is a GET request with an {id} parameter, do the following.
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

    # If the request is a GET request without an {id} parameter, do the following.
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
