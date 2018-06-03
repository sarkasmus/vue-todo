import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TodoEditView from '../../../src/components/todo-edit-view/TodoEditView.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

/**
 * Testing component representing single task (todo).
 */
describe('Todo', () => {
  let todoEditViewComponent
  let actions
  let getters
  let router

  /**
   * Inits every testcase.
   */
  beforeEach(() => {
    actions = {
      create: jest.fn(),
      edit: jest.fn()
    }

    getters = {
      todos () {
        return [
          {
            title: 'Task 1',
            description: 'My awesome task',
            finished: false,
            dueDate: '2018-06-02'
          },
          {
            title: 'Task 2',
            description: 'My awesome task',
            finished: true,
            dueDate: '2018-06-03'
          }
        ]
      }
    }

    let store = new Vuex.Store({
      actions: actions,
      getters: getters
    })

    router = {
      push: jest.fn()
    }

    todoEditViewComponent = shallowMount(TodoEditView, {
      mocks: {
        $router: router,
        $route: {
          name: 'create',
          params: {}
        }
      },
      store,
      localVue
    })
  })

  it('should be able to create a new task', () => {
    todoEditViewComponent.find('.prop-title').element.value = 'Input'
    todoEditViewComponent.find('.prop-title').trigger('input')

    todoEditViewComponent.find('.description').element.value = 'Description'
    todoEditViewComponent.find('.description').trigger('input')

    todoEditViewComponent.find('.dueDate').element.value = '2018-06-04'
    todoEditViewComponent.find('.dueDate').trigger('input')

    todoEditViewComponent.find('.save').trigger('click')

    expect(actions.create).toBeCalled()
    expect(router.push).toBeCalled()
  })

  it('should be able to edit an existing task', () => {
    todoEditViewComponent.vm.$route = {
      name: 'edit',
      params: {
        id: 1
      }
    }

    todoEditViewComponent.find('.prop-title').element.value = 'Input'
    todoEditViewComponent.find('.prop-title').trigger('input')

    todoEditViewComponent.find('.description').element.value = 'Description'
    todoEditViewComponent.find('.description').trigger('input')

    todoEditViewComponent.find('.dueDate').element.value = '2018-06-04'
    todoEditViewComponent.find('.dueDate').trigger('input')

    todoEditViewComponent.find('.save').trigger('click')

    expect(actions.edit).toBeCalled()
    expect(router.push).toBeCalled()
  })

  /**
   * Matching snapshot - HTML structure of the component.
   */
  it('should match snapshot', () => {
    expect(todoEditViewComponent.element).toMatchSnapshot()
  })

  /**
   * Matching edit page.
   */
  it('should match snapshot', () => {
    todoEditViewComponent.vm.$route = {
      name: 'edit',
      params: {
        id: 1
      }
    }

    expect(todoEditViewComponent.element).toMatchSnapshot()
  })
})
