const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Simone Hofer - Naturkosmetik',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ausgebildete, diplomierte Naturkosmetikerin Hautanalyse, Ganzheitliche, Gesichtsbehandlungen, individuelle Behandlung mit zertifizierten natürlichen Produkten für Genießen, Wohlbefinden und Entspannung' },
      { hid: 'keywords', name: 'keywords', content: 'naturkosmetik, Gesichtsreinigung, Naturkosmetika, Hautdiagnose, Hautanalyse, Kosmetikbehandlung, Wellness Massagen, Augenbrauenkorrektur, Nacken-, Dekolleté-, Gesichtsmassage, Kräuter-Kompressen, typgerechtes Peeling, Lymphstimulationsmassage, Kräuterstempel-Massage, Maniküre, Handbad, Nagelhaut entfernen, Wimpern färben, Brauen färben und formen, Natürliche, Haarentfernung, 7000 Chur, naturkosmetik, sugaring' },
      { hid: 'google-site-verification', name:'google-site-verification', content: 'dfDD92KI_EKTM6h4HPi9YnDwVkWDz--FBb8U9uMzupA'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,600,600i,700,700i' }
    ],
    // script: [
    //   {
    //     src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
    //     type: 'text/javascript',
    //   },
    // ],
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
    'nuxtent',
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
