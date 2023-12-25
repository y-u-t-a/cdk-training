import { Construct } from "constructs"
import {
  Stack,
  StackProps,
  aws_lambda_nodejs,
  aws_logs,
  RemovalPolicy
} from "aws-cdk-lib"
import { Runtime } from "aws-cdk-lib/aws-lambda"

export class LambdaNodeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    createLambda(this, 'node-function-a', [])
    createLambda(this, 'node-function-sdk', ["@aws-sdk/client-sts"])
  }
}

function createLambda(
  scope: Construct,
  functionName: string,
  bundleModules: string[]
) {
  new aws_logs.LogGroup(scope, `${functionName}-logs`, {
    logGroupName: `/aws/lambda/${functionName}`,
    retention: aws_logs.RetentionDays.ONE_WEEK,
    removalPolicy: RemovalPolicy.DESTROY,
  })
  new aws_lambda_nodejs.NodejsFunction(scope, functionName, {
    runtime: Runtime.NODEJS_18_X,
    entry: `src/${functionName}/index.mjs`,
    handler: 'handler',
    functionName: functionName,
    bundling: {
      nodeModules: bundleModules
    }
  })
}