import { App, Stack } from 'aws-cdk-lib'
import { createLambdaPython } from './lib/lambda-python.ts'

const app = new App()
const stack = new Stack(app, 'lambda-python-stack')

createLambdaPython(stack)
