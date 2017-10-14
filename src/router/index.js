import Vue from 'vue'
import Router from 'vue-router'
import ImportCsv from '../components/ImportCsv.vue'
import SearchReport from '../components/SearchReport.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ImportCsv
    },
    {
      path: '/searchReport',
      name: 'searchReport',
      component: SearchReport
    }
  ]
})
