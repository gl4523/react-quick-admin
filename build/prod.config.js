const miniCssExtractPlugin = require('mini-css-extract-plugin') 
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
exports.rules = [{
  test: /\.s(a|c)ss$/,
  use: [
    miniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader'
  ]
}, {
  test: /\.css$/,
  use: [
    miniCssExtractPlugin.loader,
    'css-loader'
  ]
}]

exports.plugins = [
  new optimizeCssAssetsPlugin(),
  new miniCssExtractPlugin({
    filename: 'css/[name].[chunkhash:4].css'
  })
]