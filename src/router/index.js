import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/index",
      name: "index",
      component: Index
    }
  ]
})
