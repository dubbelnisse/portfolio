var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var TransferWebpackPlugin = require('transfer-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new TransferWebpackPlugin([
      { from: 'assets', to: './' }
    ], path.join(__dirname, 'src')),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new TransferWebpackPlugin([
      { from: '/src/assets/images', to: 'images' }
    ], path.join(__dirname, 'src')),
  ],
  postcss: [
    require('postcss-import')({
      from: 'src'
    }),
    require('postcss-modules-resolve-from-alias')({
      'css': process.cwd() + '/src/styles',
      'component': process.cwd() + '/src/components'
    }),
    require('postcss-css-variables'),
    require('postcss-custom-media'),
    require('postcss-each'),
    require('postcss-for'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
