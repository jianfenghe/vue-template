import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

// vue 环境提示
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
