import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Input from '@/components/Input'
import InputDome from '@/components/InputDome'
import CtpView from '@/components/PrintView/CtpView'
import JrfView from '@/components/PrintView/JrfView'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/ctp_print',
      name: 'CtpPrintView',
      component: CtpView
    },
    {
      path: '/jrf_print',
      name: 'JrfPrintView',
      component: JrfView
    }
  ]
})
