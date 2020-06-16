import Vue from 'vue'
import './cube-ui'

import './register'
import 'common/stylus/index.styl'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
