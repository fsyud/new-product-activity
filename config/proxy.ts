/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://www.superjy.cn/public/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  }
};
