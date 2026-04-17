import { App } from 'aws-cdk-lib'
import { StaticSite } from './lib/static-site-stack.ts'

const app = new App()
new StaticSite(app, 'staicSite')
