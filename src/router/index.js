import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
import Leaderboard from '../views/CatsLeaderboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: Leaderboard
  }
]

const router = new VueRouter({
  routes
})

export default router
