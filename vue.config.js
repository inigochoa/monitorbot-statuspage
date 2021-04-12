module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },

  publicPath: 'production' === process.env.NODE_ENV ? '/' : '/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
  },
}
