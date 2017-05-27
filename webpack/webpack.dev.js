const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// App Directory
const srcDir = resolve(__dirname, '../src');

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'standard-loader',
        exclude: /node_modules/
      },

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
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
    }),
    new ExtractTextPlugin('style.css'),
    new DashboardPlugin()
  ]
}