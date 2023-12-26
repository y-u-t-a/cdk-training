import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import { HttpApi, HttpMethod } from 'aws-cdk-lib/aws-apigatewayv2'
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations'
import { MainLambda } from './constract/main-lambda'
import { AuthLambda } from './constract/auth-lambda'

export class HttpApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    const mainLambda = new MainLambda(this, 'MainLambda')
    const authLambda = new AuthLambda(this, 'AuthLambda')
    const httpApi = new HttpApi(this, 'HttpApi')
    httpApi.addRoutes({
      path: '/',
      methods: [HttpMethod.GET],
      integration: new HttpLambdaIntegration("lambdaIntegration", mainLambda.function)
    })
  }
}
