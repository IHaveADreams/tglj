import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Journey from '@/components/journey'
import Find from '@/components/find'
import Mine from '@/components/mine'
import Introduce from '@/components/introduce'
import inland from '@/components/inland'
import foreign from '@/components/foreign'
import traval from '@/components/traval'

Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/journey',
      name: 'journey',
      component: Journey
    },
     {
      path: '/find',
      name: 'find',
      component: Find
    },
     {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/inland',
      name: 'inland',
      component: inland
    },
    {
      path: '/foreign',
      name: 'foreign',
      component: foreign
    },
    {
      path: '/traval',
      name: 'traval',
      component: traval
    }
  ]
})
