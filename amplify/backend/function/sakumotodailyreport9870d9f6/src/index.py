import json
import boto3

def lambda_handler(event, context):
  # リクエストを取得します。
  request = json.loads(event['body'])

  # リクエストの種類を判定します。
  method = request['method']

  # リクエストに応じて処理を行います。
  if method == 'POST':
    # Todo を作成します。
    todo = {
      'title': request['title'],
      'description': request['description'],
      'completed': False,
    }
    db.todos.insert(todo)
  elif method == 'GET':
    # Todo を取得します。
    todos = db.todos.query()
    return {
      'statusCode': 200,
      'body': json.dumps(todos),
    }
  elif method == 'PUT':
    # Todo を更新します。
    todo = {
      'id': request['id'],
      'title': request['title'],
      'description': request['description'],
      'completed': request['completed'],
    }
    db.todos.update(todo)
  elif method == 'DELETE':
    # Todo を削除します。
    db.todos.delete(request['id'])

  # 成功した応答を返します。
  return {
    'statusCode': 200,
  }