import * as cdk from '@aws-cdk/core'
import * as logs from '@aws-cdk/aws-logs'
import * as lambdaNodeJs from '@aws-cdk/aws-lambda-nodejs'
import { Runtime } from "@aws-cdk/aws-lambda"

export class LambdaNodeStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    createLambda(this, 'node-function-a', [])
    createLambda(this, 'node-function-sdk', ["@aws-sdk/client-sts"])
  }
}

function createLambda(
  scope: cdk.Construct,
  functionName: string,
  bundleModules: string[]
) {
  new logs.LogGroup(scope, `${functionName}-logs`, {
    logGroupName: `/aws/lambda/${functionName}`,
    retention: logs.RetentionDays.ONE_WEEK,
    removalPolicy: cdk.RemovalPolicy.DESTROY,
  })
  return new lambdaNodeJs.NodejsFunction(scope, functionName, {
    runtime: Runtime.NODEJS_16_X,
    entry: `src/${functionName}/index.js`,
    handler: 'handler',
    functionName: functionName,
    depsLockFilePath: 'package-lock.json',
    bundling: {
      nodeModules: bundleModules
    }
  })
}