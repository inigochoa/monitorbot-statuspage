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

  pwa: {
    manifestOptions: {
      background_color: '#FFFFFF',
      description: 'Status page of systems managed by Monitorbot',
      display: 'standalone',
      lang: 'en',
      orientation: 'any',
      short_name: 'MB',
      start_url: '.',
      theme_color: '#FFFFFF',
    },
    msTileColor: '#FFFFFF',
    name: 'Monitorbot',
    themeColor: '#FFFFFF',
  },
}
