import * as cdk from 'aws-cdk-lib'
import { LambdaRouterStack } from '../lib/lambda-router-stack.ts'

const app = new cdk.App()
new LambdaRouterStack(app, 'LambdaRouterStack')
