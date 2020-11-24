// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import base from "./base.js"
import axios from "axios"
import qs from "qs"
Vue.use(base)
Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.prototype.contextPath = "/apis"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
