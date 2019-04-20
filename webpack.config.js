const isProd = process.env.NODE_ENV === 'production'
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')
module.export = {
  entry: {
    main: './src/main.tsx'
  },
  output: {
    file: 'js/[name].[contenthash:4].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /.(j|t)sx?$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  mode: isProd? 'production' : 'development'
}