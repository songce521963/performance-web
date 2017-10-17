import Vue from 'vue'
import Router from 'vue-router'
import ImportExcle from '../components/ImportExcle.vue'
import SearchReport from '../components/SearchReport.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ImportExcle
    },
    {
      path: '/searchReport',
      name: 'searchReport',
      component: SearchReport
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
