var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    // './static/css/index.scss', // FIXME: will fix after bootstrap-material-design fixed their issue
    './static/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {from: './node_modules/bootstrap-material-design/dist/**/*', to: './dist/libs/bootstrap-material-design'}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss?$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./static/css")]
  }
}
