// Configuration for your app
var path = require('path')
module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'addressbar-color',
      'clipboard'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      // 'material-icons'
      // 'ionicons',
      // 'mdi',
      'fontawesome'
    ],
    supportIE: true,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      // useNotifier: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        })

        cfg.resolve.alias = {
          ...cfg.resolve.alias, // This adds the existing alias
          // Add you own alias like this
          sections: path.resolve(__dirname, 'src/components/sections')
        }
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QPopover',
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QParallax',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QScrollObservable',
        'QKnob',
        'QIcon',
        'QCard',
        'QCardMedia',
        'QCardMain',
        'QCardSeparator',
        'QCardActions',
        'QCardTitle',
        'QRating',
        'QSpinnerGears',
        'QChip',
        'QList',
        'QListHeader',
        'QItem',
        'QItemSeparator',
        'QItemMain',
        'QItemTile',
        'QItemSide',
        'QCollapsible',
        'QProgress',
        'QCarousel',
        'QCarouselSlide',
        'QTooltip',
        'QModal',
        'QCarouselControl'
      ],

      iconSet: 'fontawesome',
      directives: [
        'Ripple',
        'CloseOverlay',
        'ScrollFire'
      ],
      // Quasar plugins
      plugins: [
        'Notify',
        'Screen'
      ]
    },
    // animations: 'all' --- includes all animations
    animations: 'all',
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      extendWebpack (cfg) {
        // do something with cfg
      },
      packager: {
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      }
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.3'
  }
}
