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

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: Welcom },
    { path: '/login', name: 'login', component: Login },
    { path: '/registr', name: 'login', component: Register },
    { path: '/registr', name: 'login', component: Register },
    { path: '/chosedivase', name: 'chosedivase', component: ChoseDivase},
    { path: '/library', name: 'library', component: Library,
        children: [
            {path: 'image', name: 'image', component: Image},
            {path: 'movies', name: 'movies', component: Movies},
            {path: 'music', name: 'music', component: Music},
        ]
    },
  ]
});