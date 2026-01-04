import { App, Stack } from 'aws-cdk-lib'
import { createLambdaPython } from './lib/lambda-python'

const app = new App()
const stack = new Stack(app, 'lambda-python-stack')

createLambdaPython(stack)
