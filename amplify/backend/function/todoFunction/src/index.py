import boto3

def handler(event, context):
  # Get the datastore client.
  datastore = boto3.resource('amplify', region_name=os.environ['ap-northeast-2'])

  # Get the table.
  table = datastore.Table('Todos')

  # Get the item.
  item = table.get(id='a903a791-932c-473f-b552-340028a5d54e')

  # Update the item.
  item['name'] = 'John Doe'
  item['email'] = 'johndoe@example.com'
  item.save()

  # Return the item.
  return item