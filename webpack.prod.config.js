const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const config = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2|otf|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
      chunks: ['index'],
      filename: '../../../index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: '_annual-reports/2019/assets', to: '../../../_annual-reports/2019/assets' }
      ]
    }),
    new Dotenv(),
    new MiniCssExtractPlugin()
  ],
  entry: {
    index: path.resolve(__dirname, 'src', 'main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist/_annual-reports/2019/js'),
    publicPath: '/_annual-reports/2019/js/',
    filename: '[name].bundle.js'
  }
}

module.exports = config
