import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Media from '@/components/Media'

Vue.use(Router)
Vue.component('media', Media)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
