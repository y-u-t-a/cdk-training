import { HttpApi, HttpMethod } from 'aws-cdk-lib/aws-apigatewayv2'
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations'
import { Construct } from 'constructs'
import { AuthLambda } from './constract/auth-lambda'
import { MainLambda } from './constract/main-lambda'

export function createHttpApi(scope: Construct) {
  const mainLambda = new MainLambda(scope, 'MainLambda')
  const _authLambda = new AuthLambda(scope, 'AuthLambda')
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
