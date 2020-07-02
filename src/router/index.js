import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProjectView from '@/views/ProjectView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/projects/:id",
    name: ProjectView,
    component: ProjectView,
    props: true,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
