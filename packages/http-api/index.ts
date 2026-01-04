import * as cdk from 'aws-cdk-lib'
import { createHttpApi } from './lib/http-api'

const app = new cdk.App()
const stack = new cdk.Stack(app, 'http-api-stack')

createHttpApi(stack)
