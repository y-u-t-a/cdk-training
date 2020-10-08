import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'

export class LambdaTsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    new NodejsFunction(this, 'mainFunction', {
      functionName: 'TestTSFunction',
      description: 'TypeScript のテスト用関数',
      entry: 'lambda/main.ts',
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_12_X,
      timeout: cdk.Duration.seconds(60),
      memorySize: 256,
      environment: {
        "TZ": "Asia/Tokyo"
      },
    })
  }
}
