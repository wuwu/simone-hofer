const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Simone Hofer - Naturkosmetik',
    htmlAttrs: {
      lang: 'de-DE',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Willkommen bei Simone Hofer Naturkosmetik in Chur · diplomierte Naturkosmetikerin · Entspannen, wohlfühlen und geniessen von der Gesichtspflege über Hautanalyse bis zu ganzheitlichen Gesichtsbehandlungen · schön & rein mit zertifizierten natürlichen Produkten ' },
      { hid: 'keywords', name: 'keywords', content: 'naturkosmetik, Gesichtsreinigung, Naturkosmetika, Hautdiagnose, Hautanalyse, Kosmetikbehandlung, Wellness Massagen, Augenbrauenkorrektur, Gesichtsmassage, Kräuter-Kompressen, typgerechtes Peeling, Lymphstimulationsmassage, Kräuterstempel-Massage, Maniküre, Natürliche, Haarentfernung, Chur, 7000 Chur, sugaring' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,600,600i,700,700i' },
    ],
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        type: 'text/javascript',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    '~plugins/markdown-helpers.js',
    { src: '~/plugins/vue-markdown.js', ssr: false }

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', ['./assets/scss/abstracts/_settings.scss', './assets/scss/abstracts/_mixins.scss']],
    'nuxt-netlify-cms',
    ['@nuxtjs/google-analytics', { id: 'UA-113718696-1' }],
    'nuxtent'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-markdown'],
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%'],
        grid: true
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Netlify CMS
  */
  nuxtent: {
    content: [
      [
        'pages',
        {
          page: '/_slug',
          permalink: '/:slug',
          isPost: false,
          generate: ['get', 'getAll'],
        },
      ],
    ],
  },
}
