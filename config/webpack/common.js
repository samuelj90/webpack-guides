const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './bootstrap.ts',
  output: {
    filename: '[name].bundle.js?[hash]',
    path: path.resolve(process.cwd(), 'dist')
  },
  context: path.resolve(process.cwd(), "src"),
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: (() => {
            return {
              name: './assets/images/[path][name].[ext]?[hash]',
            }
          })()
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: (() => {
            return {
              name: './assets/fonts/[path][name].[ext]?[hash]',
            }
          })()
        }]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'ng-annotate-loader',
          'awesome-typescript-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // Specify the common bundle's name.
    })
  ]
};
