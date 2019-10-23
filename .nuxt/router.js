import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6dc9fe0e = () => interopDefault(import('../pages/Multiplayer.vue' /* webpackChunkName: "pages/Multiplayer" */))
const _5e142a44 = () => interopDefault(import('../pages/Single.vue' /* webpackChunkName: "pages/Single" */))
const _6863c0c2 = () => interopDefault(import('../pages/Statistics.vue' /* webpackChunkName: "pages/Statistics" */))
const _0f502ea6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Multiplayer",
    component: _6dc9fe0e,
    name: "Multiplayer"
  }, {
    path: "/Single",
    component: _5e142a44,
    name: "Single"
  }, {
    path: "/Statistics",
    component: _6863c0c2,
    name: "Statistics"
  }, {
    path: "/",
    component: _0f502ea6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
