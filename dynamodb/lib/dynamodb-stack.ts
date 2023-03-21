import { Construct } from "constructs"
import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib'
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb'

export class DynamodbStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    dynamoDb(this)
  }
}

const dynamoDb = (scope: Construct) => {
  return new Table(scope, 'Table', {
    partitionKey: {
      name: "id",
      type: AttributeType.STRING
    },
    removalPolicy: RemovalPolicy.DESTROY // スタック削除時に削除する
  })
}