import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Default', component: Login },
    { path: '/login', name: 'Login', component: Login },
    { path: '/index', name: 'Index', component: Index },
    { path: '/register', name: 'Register', component: Register }
  ]
})
