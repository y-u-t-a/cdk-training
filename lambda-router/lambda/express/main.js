import serverlessExpress from '@codegenie/serverless-express'
import express from 'express'

const app = express()

app.get('/hello/:name?', (req, res) => {
  const name = req.params.name || 'World'
  res.send(`Hello ${name}!`)
})

export const handler = serverlessExpress({ app })