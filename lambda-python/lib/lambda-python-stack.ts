import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

export class LambdaPythonStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    new lambda.Function(this, 'PythonFunction', {
      functionName: 'python-function',
      runtime: lambda.Runtime.PYTHON_3_8,
      
      code: lambda.Code.fromAsset('lambda', {
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
