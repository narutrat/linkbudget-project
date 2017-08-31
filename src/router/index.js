import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Input from '@/components/Input'
import InputDome from '@/components/InputDome'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Input',
    //   component: Input
    // },
    {
      path: '/',
      name: 'Dome',
      component: InputDome
    }
  ]
})
