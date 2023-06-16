import json

def handler(event, context):
  print('received event:')
  print(event)
  
  return {
      'isBase64Encoded': False,
      'statusCode': 200,
      'headers': {},
      'body': '{"message": "Hello from your new Amplify Python lambda!"}'
  }