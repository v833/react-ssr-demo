const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { Document } = require('./Document.js')
const { App } = require('./components/App.js')

const router = express.Router()

const appString = ReactDOMServer.renderToString(<App />)
const html = ReactDOMServer.renderToStaticMarkup(<Document>{appString}</Document>)

router.get('/', (req, res) => {
  res.send(html)
})

module.exports = router
