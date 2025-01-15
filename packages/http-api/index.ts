import * as cdk from 'aws-cdk-lib'
import { HttpApiStack } from './lib/http-api-stack'

const app = new cdk.App()
new HttpApiStack(app, 'HttpApiStack')
