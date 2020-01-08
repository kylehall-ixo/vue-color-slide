import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import ColorSlideApp from '@/components/ColorSlideApp.vue'

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/color-slide', component: ColorSlideApp },
  ],
})
