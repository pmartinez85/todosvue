// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'
import Axios from 'axios'
import querystring from 'querystring'

windows.axios = Axios
Vue.prototype.$http = Axios
window.querystring = querystring

import Todos from 'components/Todos.vue'
import Tokens from 'components/Tokens.vue'
import * as windows from 'axios/dist/axios'

const routes = [
  { path: '/todos', component: Todos },
  { path: '/tokens', component: Tokens }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)
Vue.use(VueMaterial)
/* eslint-disable no-new */

Vue.material.registerTheme('custom', {
  primary: 'grenn',
  accent: 'blue',
  warn: 'blue',
  background: 'grey'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
