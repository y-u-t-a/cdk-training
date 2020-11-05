import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

export class MainLambda extends cdk.Construct {

  readonly function:lambda.Function

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id)
    this.function = new lambda.Function(this, 'MainLambdaFunction', {
      functionName: 'MainFunction',
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset('lambda/main-lambda-function', {
        bundling: {
          image: lambda.Runtime.PYTHON_3_8.bundlingDockerImage,
          command: [
            'bash', '-c', `
            if [ -e requirements.txt ]; then
              pip install -r requirements.txt -t /asset-output
            fi
            cp -au . /asset-output
            `,
          ]
        }
      }),
      handler: 'main.handler'
    })
  }
}