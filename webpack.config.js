const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: (() => {
            return {
              name: 'assets/fonts/[path][name].[ext]?[hash]',
              publicPath: './dist/',
            }
          })()
        }]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
};