module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3201',
          changeOrigin: true
        },
      }
    }
  }