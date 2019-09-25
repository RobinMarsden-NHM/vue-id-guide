const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {

  entry: [
    './src/index.js'
  ],

  output: {
    path: resolve('dist'),
    filename: 'bundle.[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 4096,
          name: 'fonts/[name].[ext]?[hash]',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ]
  },

  plugins: [
    // Copies imgs from src static to equiv folder in dist
    new CopyWebpackPlugin([{
      from: resolve('static/img'),
      to: resolve('dist/static/img'),
      toType: 'dir'
    }]),
    //
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'PWA ID guide',
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new WebpackPwaManifest({
      name: 'Tree ID guide',
      short_name: 'TreeID',
      description: 'An interactive tree ID guide from the Natural History Museum',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      theme_color: '#ffffff',
      icons: [
        {
          src: path.resolve('src/img/icon.png'),
          sizes: [36, 48, 192, 512]
        },
        {
          src: path.resolve('src/img/ios-icon.png'),
          sizes: [36, 48, 192, 512, 1024],
          destination: path.join('icons', 'ios'),
          ios: true
        }
      ]
    }),
    new FaviconsWebpackPlugin('./src/img/icon.png')
  ]
}
