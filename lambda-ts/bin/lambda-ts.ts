#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { LambdaTsStack } from '../lib/lambda-ts-stack'

const app = new cdk.App()
new LambdaTsStack(app, 'LambdaTsStack')
