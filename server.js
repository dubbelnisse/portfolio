var path = require('path')
var express = require('express')
var port = process.env.PORT || 3000
var app = express()

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const config = require('./webpack.config.dev')

  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))

} else {
  app.use('/static', express.static('dist'))
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
