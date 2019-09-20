const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {

  mode: 'production',

  plugins: [
    new CleanWebpackPlugin()
  ]

})
