import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import { LogGroup, RetentionDays } from '@aws-cdk/aws-logs'
import { PythonFunction } from '@aws-cdk/aws-lambda-python'

export class LambdaPythonModuleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    new PythonFunction(this, 'PyFunction', {
      functionName: 'PyFunction',
      entry: 'lambda',
      index: 'main.py',
      handler: 'handler',
      runtime: lambda.Runtime.PYTHON_3_8
    })
    new LogGroup(this, 'PyFunctionLogs', {
      logGroupName: "/aws/lambda/PyFunction",
      retention: RetentionDays.ONE_DAY,
      removalPolicy: cdk.RemovalPolicy.DESTROY // スタック削除時に一緒に削除する
    })
  }
}
