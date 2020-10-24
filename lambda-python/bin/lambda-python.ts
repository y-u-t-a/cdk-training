#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { LambdaPythonStack } from '../lib/lambda-python-stack'

const app = new cdk.App()
new LambdaPythonStack(app, 'LambdaPythonStack')
