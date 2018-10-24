import Vue from 'vue'
import Router from 'vue-router'
import TestPage from '@/components/TestPage'
import Bulb from '@/components/Bulb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/testpage',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/',
      name: 'Bulb',
      component: Bulb
    }
  ]
})
