const isProd = process.env.NODE_ENV === 'production'
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')
module.exports = {
  entry: {
    main: './src/main.tsx'
  },
  output: {
    filename: 'js/[name].[hash:4].js',
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
      // some define
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  mode: isProd ? 'production' : 'development',
  devServer: isProd ? {} : {
    hot: true,
    inline: true,
    open: true,
    contentBase: '/',
    port: 8087
  }
}