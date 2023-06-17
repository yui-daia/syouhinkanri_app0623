import json
from amplify_datastore import datastore

def lambda_handler(event, context):
    # Get the request body.
    body = json.loads(event['body'])

    # Get the Amplify Datastore client.
    datastore_client = datastore()

    # Get the Todo table.
    todo_table = datastore_client.Table('Todo')

    # If the request is to create a new Todo, do the following.
    if body['action'] == 'create':
        # Create the Todo.
        todo_table.create(Item={
            'id': body['id'],
            'title': body['title'],
            'description': body['description']
        })

    # If the request is to update an existing Todo, do the following.
    elif body['action'] == 'update':
        # Update the Todo.
        todo_table.update(Key={
            'id': body['id']
        }, UpdateExpression='SET title = :title, description = :description', ExpressionAttributeValues={
            ':title': body['title'],
            ':description': body['description']
        })

    # If the request is to delete an existing Todo, do the following.
    elif body['action'] == 'delete':
        # Delete the Todo.
        todo_table.delete(Key={
            'id': body['id']
        })

    # Return the response.
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,DELETE,PUT'
        },
        'body': json.dumps({
            'message': 'Success'
        })
    }