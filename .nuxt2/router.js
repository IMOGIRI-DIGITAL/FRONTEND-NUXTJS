import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5bda153a = () => interopDefault(import('../pages/coba.vue' /* webpackChunkName: "pages/coba" */))
const _f0943dfe = () => interopDefault(import('../pages/create-own-trip/index.vue' /* webpackChunkName: "pages/create-own-trip/index" */))
const _2564f964 = () => interopDefault(import('../pages/educational-tour/index.vue' /* webpackChunkName: "pages/educational-tour/index" */))
const _6f5b91ea = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2e4f96aa = () => interopDefault(import('../pages/my-trip/index.vue' /* webpackChunkName: "pages/my-trip/index" */))
const _4fd1c5ec = () => interopDefault(import('../pages/payment/index.vue' /* webpackChunkName: "pages/payment/index" */))
const _233cb50e = () => interopDefault(import('../pages/payment-history.vue' /* webpackChunkName: "pages/payment-history" */))
const _01eb95ea = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _e12b729c = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _cc55138c = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _6e23a6ca = () => interopDefault(import('../pages/tour-bycity/index.vue' /* webpackChunkName: "pages/tour-bycity/index" */))
const _7f2a582a = () => interopDefault(import('../pages/payment/my-history.vue' /* webpackChunkName: "pages/payment/my-history" */))
const _559a2fa9 = () => interopDefault(import('../pages/create-own-trip/_id.vue' /* webpackChunkName: "pages/create-own-trip/_id" */))
const _47ea04cc = () => interopDefault(import('../pages/educational-tour/_id.vue' /* webpackChunkName: "pages/educational-tour/_id" */))
const _054f988c = () => interopDefault(import('../pages/search/_q.vue' /* webpackChunkName: "pages/search/_q" */))
const _77c499c3 = () => interopDefault(import('../pages/tour-bycity/_id.vue' /* webpackChunkName: "pages/tour-bycity/_id" */))
const _b498225a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/coba",
    component: _5bda153a,
    name: "coba"
  }, {
    path: "/create-own-trip",
    component: _f0943dfe,
    name: "create-own-trip"
  }, {
    path: "/educational-tour",
    component: _2564f964,
    name: "educational-tour"
  }, {
    path: "/login",
    component: _6f5b91ea,
    name: "login"
  }, {
    path: "/my-trip",
    component: _2e4f96aa,
    name: "my-trip"
  }, {
    path: "/payment",
    component: _4fd1c5ec,
    name: "payment"
  }, {
    path: "/payment-history",
    component: _233cb50e,
    name: "payment-history"
  }, {
    path: "/profile",
    component: _01eb95ea,
    name: "profile"
  }, {
    path: "/register",
    component: _e12b729c,
    name: "register"
  }, {
    path: "/search",
    component: _cc55138c,
    name: "search"
  }, {
    path: "/tour-bycity",
    component: _6e23a6ca,
    name: "tour-bycity"
  }, {
    path: "/payment/my-history",
    component: _7f2a582a,
    name: "payment-my-history"
  }, {
    path: "/create-own-trip/:id?",
    component: _559a2fa9,
    name: "create-own-trip-id"
  }, {
    path: "/educational-tour/:id?",
    component: _47ea04cc,
    name: "educational-tour-id"
  }, {
    path: "/search/:q",
    component: _054f988c,
    name: "search-q"
  }, {
    path: "/tour-bycity/:id?",
    component: _77c499c3,
    name: "tour-bycity-id"
  }, {
    path: "/",
    component: _b498225a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
