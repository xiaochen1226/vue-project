module.exports = {
  // 1 配置一：cli提供的属性
  outputDir: './build',
  // publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
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
