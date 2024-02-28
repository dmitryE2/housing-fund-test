const { realpathSync } = require('fs')
const path = require('path')

const appDirectory = realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
  src: resolveApp('src'),
  build: resolveApp('dist'),
  public: resolveApp('public'),
  assets: resolveApp('src/assets'),
  images: resolveApp('src/assets/images'),
  styles: resolveApp('src/assets/styles'),
  components: resolveApp('src/components'),
}
