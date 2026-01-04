import { Construct } from 'constructs'
import { aws_lambda_nodejs, aws_logs, RemovalPolicy } from 'aws-cdk-lib'
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda'

export function createLambda(
  scope: Construct,
  functionName: string,
  bundleModules: string[],
) {
  new aws_logs.LogGroup(scope, `${functionName}-logs`, {
    logGroupName: `/aws/lambda/${functionName}`,
    retention: aws_logs.RetentionDays.ONE_WEEK,
    removalPolicy: RemovalPolicy.DESTROY,
  })
  new aws_lambda_nodejs.NodejsFunction(scope, functionName, {
    runtime: Runtime.NODEJS_22_X,
    architecture: Architecture.ARM_64,
    entry: `src/${functionName}/index.mjs`,
    handler: 'handler',
    functionName: functionName,
    bundling: {
      nodeModules: bundleModules,
    },
  })
}
