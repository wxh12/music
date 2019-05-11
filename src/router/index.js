import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import mymusic from '@/components/Mymusic'
import list from '@/components/List'
import home3 from '@/components/home3'
import charts from '@/components/Charts'
import gedan from '@/components/gedan'
import singer from '@/components/singer'
import load from '@/components/download'
import friend from '@/components/friend'
import singers from '@/components/singers'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
  { path: '/',component: home3},
  { path: '/mymusic',component: mymusic},
  { path: '/list', component:list},
  { path: '/home3',component: home3},
  { path: '/charts', component:charts},  
  { path: '/gedan', component:gedan},
  { path: '/singer', component:singer},
  { path: '/load', component:load},
  { path: '/friend', component:friend},
  { path: '/singers', component:singers},
  ]
})
