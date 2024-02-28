const paths = require('./paths.config')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,

  output: {
    path: paths.build,
    publicPath: '',
    filename: `[name].js`,
    chunkFilename: `[name].[chunkhash:4].js`,
  },

  target: ['web', 'es5'],

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                @import '${paths.styles}/variables.scss';
              `,
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
