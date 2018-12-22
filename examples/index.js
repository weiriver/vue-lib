import Vue from 'vue'
import App from './src/app.vue'
import SgUI from '../src/index'
import router from './src/router/router.config'
// import SgUI from '../lib/demo.m.ui'

Vue.use(SgUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})