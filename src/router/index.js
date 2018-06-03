import Vue from 'vue'
import Router from 'vue-router'
import TodosView from '../components/todos-view/TodosView.vue'
import TodoEditView from '../components/todo-edit-view/TodoEditView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todos',
      component: TodosView
    },
    {
      path: '/create',
      name: 'create',
      component: TodoEditView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: TodoEditView
    }
  ]
})
