var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')
var methodOverride = require('method-override')
var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxyServer()

module.exports = function (app) {
  app.set('port', (process.env.PORT || 3000))

  app.disable('x-powered-by')
  app.set('views', path.join(__dirname, '..', 'views'))

  app.set('view cache', false)

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(methodOverride())
  app.use(express.static(path.join(__dirname, '../..', 'public')))

  app.set('trust proxy', 'loopback')
  app.use(cookieParser())

  var node_env = process.env.NODE_ENV
  console.log('Environment: ' + node_env)

  var port = (node_env === 'production') ? app.get('port') : 3000

  if(node_env === 'devhotloader') {
    var devServer = require('../dev-server')
    devServer()
    app.all('/assets/*', function(req, res) {
      proxy.web(req, res, {
          target: 'http://localhost:3001'
      })
    })
  }

  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...')
  })

}
