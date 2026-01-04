import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import { HttpApi, HttpMethod } from 'aws-cdk-lib/aws-apigatewayv2'
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations'
import { MainLambda } from './constract/main-lambda'
import { AuthLambda } from './constract/auth-lambda'

export function createHttpApi(scope: Construct) {
  const mainLambda = new MainLambda(scope, 'MainLambda')
  const authLambda = new AuthLambda(scope, 'AuthLambda')
  const httpApi = new HttpApi(scope, 'HttpApi')
  httpApi.addRoutes({
    path: '/',
    methods: [HttpMethod.GET],
    integration: new HttpLambdaIntegration(
      'lambdaIntegration',
      mainLambda.function,
    ),
  })
}
