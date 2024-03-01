import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

const app = new Hono()

app.get('/hello/:name?', (c) => {
  const name = c.req.param('name') || 'Hono'
  return c.text(`Hello ${name}!`)
})

export const handler = handle(app)
