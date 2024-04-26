import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'

export class AuthLambda extends Construct {
  readonly function: lambda.Function

  constructor(scope: Construct, id: string) {
    super(scope, id)
    this.function = new lambda.Function(this, 'AuthLambdaFunction', {
      functionName: 'AuthFunction',
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset('lambda/auth-lambda-function', {
        bundling: {
          image: lambda.Runtime.PYTHON_3_8.bundlingImage,
          command: [
            'bash',
            '-c',
            `
            if [ -e requirements.txt ]; then
              pip install -r requirements.txt -t /asset-output
            fi
            cp -au . /asset-output
            `,
          ],
        },
      }),
      handler: 'main.handler',
    })
  }
}
