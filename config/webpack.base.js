const paths = require('./paths.config')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: paths.src,

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      components: paths.components,
      images: paths.images,
      styles: paths.styles,
    },
  },

  output: {
    path: paths.build,
    filename: `[name].js`,
    chunkFilename: `[name].[chunkhash:4].js`,
    publicPath: '/',
  },

  resolve: {
    alias: {
      '@': paths.src,
    },
  },

  plugins: [
    new VueLoaderPlugin(),

    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },

      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              additionalData: `
                @import '${paths.styles}/variables.scss';
              `,
            },
          },
        ],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        resourceQuery: /file/,
        type: 'asset/resource',
      },
    ],
  },
}
