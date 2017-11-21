// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vSelect from 'vue-select'
import VueResource from 'vue-resource'
import {Tabs, Tab} from 'vue-tabs-component'
import calendar from 'vuejs-calendar'
import VueSession from 'vue-session'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)
Vue.use(VueSession)

Vue.http.options.root = 'http://localhost:23324/v1'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
