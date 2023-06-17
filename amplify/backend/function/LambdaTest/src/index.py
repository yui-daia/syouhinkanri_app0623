import json
import boto3

def handler(event, context):
    # Get the request body.
    body = json.loads(event['body'])

    # Get the DynamoDB client.
    dynamodb = boto3.resource('dynamodb')

    # Get the Todo table.
    todo_table = dynamodb.Table('sakumoto_todo')

    # If the request is to create a new Todo, do the following.
    if body['action'] == 'create':
        # Create the Todo.
        todo_table.put_item(Item={
            'id': body['id'],
            'title': body['title'],
            'description': body['description']
        })

    # If the request is to update an existing Todo, do the following.
    elif body['action'] == 'update':
        # Update the Todo.
        todo_table.update_item(Key={
            'id': body['id']
        }, UpdateExpression='SET title = :title, description = :description', ExpressionAttributeValues={
            ':title': body['title'],
            ':description': body['description']
        })

    # If the request is to delete an existing Todo, do the following.
    elif body['action'] == 'delete':
        # Delete the Todo.
        todo_table.delete_item(Key={
            'id': body['id']
        })

    # If the request is a GET request with an {id} parameter, do the following.
    elif 'id' in event['queryStringParameters']:
        # Get the Todo with the specified ID.
        todo = todo_table.get_item(Key={
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
            'body': json.dumps(todo)
        }

    # If the request is a GET request without an {id} parameter, do the following.
    else:
        # Get all Todos.
        todos = todo_table.scan()

        # Return all Todos as JSON.
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(todos)
        }
