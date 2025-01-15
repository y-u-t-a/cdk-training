import { App } from 'aws-cdk-lib'
import { LambdaPythonStack } from '../lib/lambda-python-stack'

const app = new App()
new LambdaPythonStack(app, 'LambdaPythonStack')
