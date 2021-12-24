// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from './components/Common'
import axios from 'axios'

// axios.defaults.baseURL = '/api'

Vue.config.productionTip = false
Vue.prototype.$contextPath = common.contextPath

Vue.prototype.$httpPost = function (url, params, fn) {
  axios.post(this.$contextPath + url, params).then(
    (res) => {
      if (res.status == 200) {
        fn(res.data);
      } else {
        console.log(res)
      }
    },
    (err) => {
      console.log(err)
    }
  )
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

