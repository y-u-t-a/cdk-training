import * as cdk from '@aws-cdk/core'
import { AttributeType, Table } from '@aws-cdk/aws-dynamodb'

export class DynamodbStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    const table = dynamoDb(this)
  }
}

const dynamoDb = (scope: cdk.Construct) => {
  return new Table(scope, 'Table', {
    partitionKey: {
      name: "id",
      type: AttributeType.STRING
    },
    removalPolicy: cdk.RemovalPolicy.DESTROY // スタック削除時に削除する
  })
}