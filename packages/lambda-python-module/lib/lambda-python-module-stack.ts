import { Construct } from 'constructs'
import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs'
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha'

export class LambdaPythonModuleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    new PythonFunction(this, 'PyFunction', {
      functionName: 'PyFunction',
      entry: 'lambda',
      index: 'main.py',
      handler: 'handler',
      runtime: Runtime.PYTHON_3_13,
    })
    new LogGroup(this, 'PyFunctionLogs', {
      logGroupName: '/aws/lambda/PyFunction',
      retention: RetentionDays.ONE_DAY,
      removalPolicy: RemovalPolicy.DESTROY, // スタック削除時に一緒に削除する
    })
  }
}
