import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Ordinance from './components/Ordinance'

Vue.use(VueRouter)

const routes = [
{ path: '/', component: Ordinance }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({

  el: '#app',

  template: '<App/>',

  components: { App },

  router
}).$mount('#app')
