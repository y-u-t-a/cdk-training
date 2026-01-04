import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'

export function createLambdaPython(scope: Construct) {
  new lambda.Function(scope, 'PythonFunction', {
    functionName: 'python-function',
    runtime: lambda.Runtime.PYTHON_3_13,
    code: lambda.Code.fromAsset('lambda', {
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
