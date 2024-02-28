const paths = require('./paths.config')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
})
