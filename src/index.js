import Vue from 'vue'
import App from './App.vue'
import '../assets/app.scss'

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
