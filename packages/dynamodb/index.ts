import { App, Stack } from 'aws-cdk-lib'
import { createDynamoDb } from './lib/dynamodb'

const app = new App()
const stack = new Stack(app, 'dynamodb-stack')

createDynamoDb(stack)
