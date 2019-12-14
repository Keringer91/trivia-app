import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from '../views/TriviaApp.vue'
import ChuckApp from '../views/ChuckApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TriviaApp
  },
  {
    path: '/chuck',
    name: 'chuck',
    component: ChuckApp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
