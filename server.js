require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
})
const express = require('express')
const appRouter = require('./appRouter.js')

const app = express()

app.use('/', appRouter)

app.use(express.static('build'))

app.listen(3000)
