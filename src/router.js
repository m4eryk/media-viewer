import Vue from 'vue'
import Router from 'vue-router'

import Welcom from '@/views/Welcom';
import Login from '@/views/Login.vue';
import Library from '@/views/Library.vue';
import Image from '@/components/Image.vue';
import Movies from '@/components/Movies.vue';
import Music from '@/components/Music.vue';
import Register from '@/views/Register.vue'; 
import ChoseDivase from '@/views/ChoseDivase.vue'; 

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: { name: 'home' }},
    { path: '/home', name: 'home', component: Welcom},
    { path: '/login', name: 'login', component: Login, meta: { guest: true } },
    { path: '/registr', name: 'registr', component: Register, meta: { guest: true } },
    { path: '/chosedivase', name: 'chosedivase', component: ChoseDivase,meta: { guest: true } },
    { path: '/library', name: 'userboard', component: Library, meta: { requiresAuth: true },
      children: [
        {path: 'image', name: 'image', component: Image},
        {path: 'movies', name: 'movies', component: Movies},
        {path: 'music', name: 'music', component: Music},
      ]
    },
    { path: '/admin', name: 'admin', component: Library, meta: { requiresAuth: true, is_admin : true } }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    /*eslint no-console: "off"*/
    
    if (localStorage.getItem('jwt') == null) {
      console.log('jwt = null')
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      
      let user = localStorage.getItem('user')
      if(to.matched.some(record => record.meta.is_admin)) {
        if(user.is_admin == 1){
          next()
        }
        else{
          console.log('1')
          next({ name: 'userboard'})
        }
      }else {
        next()
      }
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    
    if(localStorage.getItem('jwt') == null){
      next()
    }
    else{
      next({ name: 'userboard'})
    }
  }else {
    
    console.log('clear')
    localStorage.clear()
    next() 
  }
})

export default router