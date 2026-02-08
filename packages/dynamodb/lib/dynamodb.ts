import { RemovalPolicy } from 'aws-cdk-lib'
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs'

export function createDynamoDb(scope: Construct): Table {
  return new Table(scope, 'dynamodb-table', {
    partitionKey: {
      name: 'id',
      type: AttributeType.STRING,
    },
    removalPolicy: RemovalPolicy.DESTROY, // スタック削除時に削除する
  })
}
