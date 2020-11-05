import * as cdk from '@aws-cdk/core'
import { MainLambda } from './constract/main-lambda'
import { AuthLambda } from './constract/auth-lambda'

export class HttpApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    new MainLambda(this, 'MainLambda')
    new AuthLambda(this, 'AuthLambda')
  }
}
