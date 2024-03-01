const serverlessExpress = require('@codegenie/serverless-express')
const express = require('express')

const app = express()

app.get('/hello/:name?', (req, res) => {
  const name = req.params.name || 'World'
  res.send(`Hello ${name}!`)
})

exports.handler = serverlessExpress({ app })