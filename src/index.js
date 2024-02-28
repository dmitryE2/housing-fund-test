import Vue from 'vue'
import App from './App.vue'
import store from './store'

import '@/assets/styles/global.scss'

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
