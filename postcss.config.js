const postcssNormalize = require('postcss-normalize')

module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', { discardComments: { removeAll: true } }],
    }),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 3,
    }),
    postcssNormalize({
      forceImport: 'sanitize.css',
    }),
  ],
}
