import * as cdk from '@aws-cdk/core'
import { HttpApi, HttpMethod, LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2'
import { MainLambda } from './constract/main-lambda'
import { AuthLambda } from './constract/auth-lambda'

export class HttpApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    const mainLambda = new MainLambda(this, 'MainLambda')
    const authLambda = new AuthLambda(this, 'AuthLambda')
    const httpApi = new HttpApi(this, 'HttpApi')
    httpApi.addRoutes({
      path: '/',
      methods: [HttpMethod.GET],
      integration: new LambdaProxyIntegration({
        handler: mainLambda.function
      })
    })
  }
}
