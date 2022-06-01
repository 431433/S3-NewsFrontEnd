import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
        path: '/myNews',
        name: 'myNews',
        component: () => import('../views/MyNewsView.vue')
    },
    {
        path: '/topStories',
        name: 'topStories',
        component: () => import('../views/TopStoriesView.vue')
    },
    {
        path: '/war',
        name: 'war',
        component: () => import('../views/WarView.vue')
    },
    {
        path: '/sports',
        name: 'sports',
        component: () => import('../views/SportsView.vue')
    },
    {
        path: '/covid',
        name: 'covid',
        component: () => import('../views/CovidView.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/SearchView.vue')
    },
    {
        path: '/rate/:article',
        name: 'rate',
        component: () => import('../views/RatingView.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
