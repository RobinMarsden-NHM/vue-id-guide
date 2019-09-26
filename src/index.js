import Vue from 'vue'
import App from './App.vue'
import VueLazyImageLoading from 'vue-lazy-image-loading'
import '../assets/app.scss'
import { inputTypes } from './common/globals'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}

Vue.use(VueLazyImageLoading, {
  // delay: 2000,
  blur: 2
})
Vue.prototype.$inputTypes = inputTypes

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  methods: {
    loadDataset: function () {
      console.log('Dataset loaded...')
    }
  },
  render: h => h(App)
})
