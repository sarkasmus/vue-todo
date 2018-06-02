import Vue from 'vue'
import Router from 'vue-router'
import TodosView from '../components/todos-view/TodosView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todos',
      component: TodosView
    }
  ]
})
