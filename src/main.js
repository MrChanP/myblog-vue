// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import animated from 'animate.css'
import './assets/common.css'

Vue.use(animated)

Vue.config.productionTip = false
Vue.prototype.$contextPath = "http://192.168.8.190:81"

Vue.prototype.$httpPost = function (url, data, fn) {
  let params = qs.stringify(data)
  axios.defaults.headers = { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" }
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

Vue.prototype.$isEmpty = function (str) {
  if (str == null) {
    return true
  }
  let params = str.toString();
  return params.length <= 0 || params === 'null' || params === 'undefined' || params === ''|| params === "";
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      userInfo: { loginName: "" }
    }
  }
})

