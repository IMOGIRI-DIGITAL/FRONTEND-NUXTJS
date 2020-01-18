const moment = require('moment')
moment.locale('en')
// require('./config');

var baseURL = process.env.BASE_URL || 'http://localhost:3000'
var baseURLApi = 'http://localhost:9999'


module.exports = {
    mode: 'universal',
    env: {
        baseUrl: baseURL,
        apiUrl: baseURLApi,
        apiV1: baseURLApi + '/api/v1',
        MIDTRANS_CLIENT_KEY: 'SB-Mid-client-6hUgSjiTGJmxxLls'
      },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Baloo&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css' },
            { href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
            { href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' },
        ],
        script: [
            { src: "https://code.jquery.com/jquery-2.2.4.min.js" },
            { src: "/bootstrap/js/jquery.js" },
            { src: "/bootstrap/js/popper.js" },
            { src: "/bootstrap/js/bootstrap.min.js" },
            { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js" },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" },
            { src: "/js/jquery.touchSwipe.min.js" },
            { src: "/js/slider.js" },
            { src: "/js/slick.js" },
            { src: "/js/range-slider.js" },
            { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", ssr:false },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js" },
            { src: "/js/datapicker.js" },
            // { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js" },
            // { src: "/js/midtrans.js", ssr: false },


        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#007bff' },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/css/slider.css',
        '@/assets/css/slick.css',
        '@/assets/css/carousell.css',
        '@/assets/css/slick-theme.css',
        '@/assets/css/price-range.css',
        '@/assets/css/style.css',
        '@/assets/css/bootstrap.min.css',
        '@/assets/css/bootstrap.min.css',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/axios',
        '~/plugins/places2',
        '~/plugins/helpers',
        // '~/plugins/vuetify'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // '@nuxtjs/vuetify',
        '@nuxtjs/moment',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        
        
    ],
    axios: {
        baseURL: 'http://localhost:9999/api/v1',
        credentials: false,
    },
    auth: {
        strategies: {
            local: {
              endpoints: {
                login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
                logout: { url: '/auth/logout', method: 'post' },
                register: { url:'/auth/register', method: 'post' },
                user: { url: '/auth/user', method: 'post', propertyName: false },
              },
              // tokenRequired: true,
              // tokenType: 'bearer'
            },
            tokenRequired: false,
            tokenType: false
        },
    },
    serverMiddleware: [
        { path: '/payment', handler: '~/middleware/postRequestHandler.js' },
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}