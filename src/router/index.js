import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Backstage from '../views/Backstage.vue'

const router = createRouter({
  history: createWebHistory('/#/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories/:category',
      name: 'categories',
      component: Categories,
      props: true
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: Backstage,
      props: true
    }
  ]
})

export default router
