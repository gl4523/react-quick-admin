const isProd = process.env.NODE_ENV === 'production'
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const {resolve} = require('path')
const {rules: DevRules, plugins: devPlugins} = require('./build/dev.config')
const {rules: prodRules, plugins: prodPlugins} = require('./build/prod.config')
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
      test: /\.(j|t)sx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.(jpg|png|git|ttf|woff)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    },
    ...(isProd ? prodRules : DevRules)]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      // some define
    }),
    new copyPlugin([{
      from: resolve(__dirname, 'static'),
      to: resolve(__dirname, 'dist/static')
    }]),
    ...(isProd ? prodPlugins : devPlugins)
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
    port: 8087,
    historyApiFallback: {
      index: '/'
    }
  }
}