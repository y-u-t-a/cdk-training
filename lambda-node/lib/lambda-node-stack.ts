import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import * as logs from '@aws-cdk/aws-logs'

export class LambdaNodeStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    createLambda(this, 'node-function-a')
    createLambda(this, 'node-function-sdk')
  }
}

const createLambda = (scope: cdk.Construct, functionName: string) => {
  new logs.LogGroup(scope, `${functionName}-logs`, {
    logGroupName: `/aws/lambda/${functionName}`,
    retention: logs.RetentionDays.ONE_WEEK,
    removalPolicy: cdk.RemovalPolicy.DESTROY,
  })
  return new lambda.Function(scope, functionName, {
    runtime: lambda.Runtime.NODEJS_14_X,
    code: lambda.Code.fromAsset(`src/${functionName}`, {
      bundling: {
        image: lambda.Runtime.NODEJS_14_X.bundlingImage,
        command: [
          'bash', '-c', `
          if [ -e package-lock.json ]; then
            npm ci
          fi
          cp -r . /asset-output
          `,
        ],
        user: 'root' // user を root にしないと /.npm ディレクトリ作成でエラーになる
      }
    }),
    handler: 'index.handler',
    functionName: functionName,
  })
}