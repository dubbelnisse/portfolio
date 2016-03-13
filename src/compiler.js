var babel = require('babel')
var fs = require('fs')
var origJs = require.extensions['.js']

function transform (filename) {
  var content = fs.readFileSync(filename, 'utf8')
  return babel.transform(content, {
    optional: [ 'es7.decorators' ]
  }).code
}

require.extensions['.js'] = function (module, filename) {
  if (filename.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, filename)
  }

  return module._compile(transform(filename), filename)
}

require.extensions['.css'] = function () {
  return null
}
