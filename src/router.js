import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: require('./views/ViewHome.vue').default
  },
  {
    path: '/guide/:section/:step',
    component: require('./views/ViewGuide.vue').default
  },
  {
    path: '/guide/start',
    redirect: '/guide/master/1'
  },
  {
    path: '/answer/:answer',
    component: require('./views/ViewAnswer.vue').default
  },
  {
    path: '/about',
    component: require('./views/ViewAbout.vue').default
  }
]

export default new VueRouter({
  routes
})
