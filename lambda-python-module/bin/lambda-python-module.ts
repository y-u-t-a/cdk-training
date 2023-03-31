import { App } from 'aws-cdk-lib'
import { LambdaPythonModuleStack } from '../lib/lambda-python-module-stack'

const app = new App()
new LambdaPythonModuleStack(app, 'LambdaPythonModuleStack')
