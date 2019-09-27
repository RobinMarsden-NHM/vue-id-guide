import Vue from 'vue'
import App from './App.vue'
import VueLazyImageLoading from 'vue-lazy-image-loading'
import '../assets/app.scss'
import { inputTypes } from './common/globals'
import router from './router'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHome, faInfoCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}

Vue.use(VueRouter)
Vue.use(VueLazyImageLoading, {
  // delay: 2000,
  blur: 2
})
Vue.prototype.$inputTypes = inputTypes

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  methods: {
    loadDataset: function () {
      console.log('Dataset loaded...')
    }
  },
  render: h => h(App)
})
