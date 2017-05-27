const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname, '../src'),
  entry: {
    app: `./index.js`,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      
      {
        test: /\.scss|css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]____[hash:base64:5]',
              camelCase: true
            }
          },{
            loader: 'sass-loader'
          }]
        }),
      }
    ]
  },
  devtool: 'source-map',
  performance: {
    hints: 'error'
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      template: `./index.html`,
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles.[chunkhash:6].css',
      allChunks: true
    }),
    new OfflinePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}