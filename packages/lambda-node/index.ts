import { App, Stack } from 'aws-cdk-lib'
import { createLambda } from './lib/lambda-node-stack'

const app = new App()
const stack = new Stack(app, 'lambda-node-stack')

createLambda(stack, 'node-function-a', [])
createLambda(stack, 'node-function-sdk', ['@aws-sdk/client-sts'])
