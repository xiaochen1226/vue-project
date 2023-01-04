module.exports = {
  // 1 配置一：cli提供的属性
  outputDir: './build',
  // publicPath: './',
  devServer: {
    proxy: {
      '^/': {
        target: 'http://0.0.0.0:8097',
        pathRewrite: {
          '^/': ''
        },
        changeOrigin: true
      }
    }
  },
  // 2 配置方式二：和webpack属性完全一致，最后会合并
  configureWebpack: {
    resolve: {
      alias: {
        components: 'src/components'
      }
    }
  }
}
