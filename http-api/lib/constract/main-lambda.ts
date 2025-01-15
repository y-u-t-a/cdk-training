import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'

export class MainLambda extends Construct {
  readonly function: lambda.Function

  constructor(scope: Construct, id: string) {
    super(scope, id)
    this.function = new lambda.Function(this, 'MainLambdaFunction', {
      functionName: 'MainFunction',
      runtime: lambda.Runtime.PYTHON_3_13,
      code: lambda.Code.fromAsset('lambda/main-lambda-function', {
        bundling: {
          image: lambda.Runtime.PYTHON_3_13.bundlingImage,
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
