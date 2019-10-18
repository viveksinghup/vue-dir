import Vue from 'vue'
import Router from 'vue-router'
import AllProject from './views/AllProject.vue'
import Home from './views/Home.vue'
import ProjectDetails from './views/ProjectDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all-Project',
      name: 'AllProject',
      component: AllProject
    },
    {
      path: '/Project-details/:id',
      name: 'ProjectDetails',
      component: ProjectDetails
    }
  ]
})
