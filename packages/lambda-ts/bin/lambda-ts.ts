import * as cdk from 'aws-cdk-lib'
import { LambdaTsStack } from '../lib/lambda-ts-stack'

const app = new cdk.App()
new LambdaTsStack(app, 'LambdaTsStack')
