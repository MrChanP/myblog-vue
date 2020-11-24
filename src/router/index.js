import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import Index from '../components/index/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: "/login", name: "login", component: Login },
    { path: "/index", name: "index", component: Index },
  ]
})
