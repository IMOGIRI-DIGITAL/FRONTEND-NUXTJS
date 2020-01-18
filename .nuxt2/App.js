import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import '../assets/css/slider.css'

import '../assets/css/slick.css'

import '../assets/css/carousell.css'

import '../assets/css/slick-theme.css'

import '../assets/css/price-range.css'

import '../assets/css/style.css'

import '../assets/css/bootstrap.min.css'

import '../assets/css/bootstrap.min.css'

import '../node_modules/vuetify/dist/vuetify.css'

import _30f5b69c from '../layouts/create-own-trip/_id.vue'
import _1b5dfdca from '../layouts/create-own-trip/index.vue'
import _6f6c098b from '../layouts/default.vue'
import _3d0cf933 from '../layouts/educational-tour/_id.vue'
import _2e42b60b from '../layouts/educational-tour/index.vue'
import _777ba69c from '../layouts/index.vue'
import _77a66d33 from '../layouts/login.vue'
import _f6a73e1a from '../layouts/my-trip/index.vue'
import _011245d2 from '../layouts/payment-history.vue'
import _70f61753 from '../layouts/payment/index.vue'
import _1f8538dc from '../layouts/payment/my-history.vue'
import _00e6bcf3 from '../layouts/profile.vue'
import _2e8a6499 from '../layouts/register.vue'
import _08151e83 from '../layouts/search/_q.vue'
import _db927ebe from '../layouts/search/index.vue'
import _3eaf644c from '../layouts/tour-bycity/_id.vue'
import _50f6bee4 from '../layouts/tour-bycity/index.vue'

const layouts = { "_create-own-trip/_id": _30f5b69c,"_create-own-trip/index": _1b5dfdca,"_default": _6f6c098b,"_educational-tour/_id": _3d0cf933,"_educational-tour/index": _2e42b60b,"_index": _777ba69c,"_login": _77a66d33,"_my-trip/index": _f6a73e1a,"_payment-history": _011245d2,"_payment/index": _70f61753,"_payment/my-history": _1f8538dc,"_profile": _00e6bcf3,"_register": _2e8a6499,"_search/_q": _08151e83,"_search/index": _db927ebe,"_tour-bycity/_id": _3eaf644c,"_tour-bycity/index": _50f6bee4 }

export default {
  head: {"title":"edukatrip2","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"My cat&#39;s pajamas Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Nunito+Sans&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Baloo&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"},{"rel":"stylesheet","href":"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.0.0\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F4.7.0\u002Fcss\u002Ffont-awesome.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fbootstrap-datepicker\u002F1.9.0\u002Fcss\u002Fbootstrap-datepicker.min.css"},{"href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900"},{"href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@4.x\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-2.2.4.min.js"},{"src":"\u002Fbootstrap\u002Fjs\u002Fjquery.js"},{"src":"\u002Fbootstrap\u002Fjs\u002Fpopper.js"},{"src":"\u002Fbootstrap\u002Fjs\u002Fbootstrap.min.js"},{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.2.1.slim.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.12.9\u002Fumd\u002Fpopper.min.js"},{"src":"\u002Fjs\u002Fjquery.touchSwipe.min.js"},{"src":"\u002Fjs\u002Fslider.js"},{"src":"\u002Fjs\u002Fslick.js"},{"src":"\u002Fjs\u002Frange-slider.js"},{"src":"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Fbootstrap\u002F4.0.0\u002Fjs\u002Fbootstrap.min.js","ssr":false},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fbootstrap-datepicker\u002F1.9.0\u002Fjs\u002Fbootstrap-datepicker.min.js"},{"src":"\u002Fjs\u002Fdatapicker.js"}],"style":[]},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,

      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
