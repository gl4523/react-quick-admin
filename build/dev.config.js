exports.rules = [{
  test: /\.s(a|c)ss$/,
  loader: 'style-loader!css-loader!sass-loader'
}, {
  test: /\.css$/,
  loader: 'style-loader!css-loader'
}]

exports.plugins = []