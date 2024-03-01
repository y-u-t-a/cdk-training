import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'

export class LambdaRouterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    this.createLambdaFunction('HonoFunction', 'lambda/hono/main.ts')
    this.createLambdaFunction('ExpressFunction', 'lambda/express/main.js')
  }

  createLambdaFunction(functionName: string, entry: string) {
    const fn = new NodejsFunction(this, functionName, {
      functionName: functionName,
      description: 'Hono Lambda Function',
      entry: entry,
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_20_X,
      architecture: lambda.Architecture.ARM_64,
      timeout: cdk.Duration.seconds(60),
      memorySize: 256,
      environment: {
        "TZ": "Asia/Tokyo"
      },
    })
    fn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    })
  }
}
