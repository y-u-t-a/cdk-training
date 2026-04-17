import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Construct } from 'constructs'

export class LambdaTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    new NodejsFunction(this, 'mainFunction', {
      functionName: 'TestTSFunction',
      description: 'TypeScript のテスト用関数',
      entry: 'lambda/main.ts',
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_24_X,
      timeout: cdk.Duration.seconds(60),
      memorySize: 256,
      environment: {
        TZ: 'Asia/Tokyo',
      },
    })
  }
}
