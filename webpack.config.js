const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  context: path.resolve(__dirname, "src"),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: (() => {
            return {
              name: 'assets/images/[path][name].[ext]?[hash]',
              publicPath: './dist/',
            }
          })()
        }]
      }
    ]
  }
};