import { App } from 'aws-cdk-lib'
import { DynamodbStack } from '../lib/dynamodb-stack'

const app = new App()
new DynamodbStack(app, 'DynamodbStack')
