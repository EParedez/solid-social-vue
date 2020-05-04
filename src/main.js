import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./pages/Home";
import Login from "./components/Login";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
