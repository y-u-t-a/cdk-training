#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { LambdaPythonModuleStack } from '../lib/lambda-python-module-stack'

const app = new cdk.App()
new LambdaPythonModuleStack(app, 'LambdaPythonModuleStack')
