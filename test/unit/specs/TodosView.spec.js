import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TodosView from '../../../src/components/todos-view/TodosView.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

/**
 * Testing component representing single task (todo).
 */
describe('Todo', () => {
  let todosViewComponent
  let actions
  let getters
  let router

  /**
   * Inits every testcase.
   */
  beforeEach(() => {
    actions = {
      finish: jest.fn(),
      remove: jest.fn()
    }

    getters = {
      todos () {
        return {
          0: {
            title: 'Task 1',
            description: 'My awesome task',
            finished: false,
            dueDate: '2018-06-02'
          },
          3: {
            title: 'Task 2',
            description: 'My awesome task',
            finished: true,
            dueDate: '2018-06-03'
          }
        }
      }
    }

    let store = new Vuex.Store({
      actions: actions,
      getters: getters
    })

    router = {
      push: jest.fn()
    }

    todosViewComponent = shallowMount(TodosView, {
      mocks: {
        $router: router
      },
      store,
      localVue
    })
  })

  it('should be able to finish a task', () => {
    todosViewComponent.vm.finish(0)
    expect(actions.finish).toBeCalled()
  })

  it('should be able to delete a task', () => {
    todosViewComponent.vm.remove(0)
    expect(actions.remove).toBeCalled()
  })

  /**
   * Matching snapshot - HTML structure of the component.
   */
  it('should match snapshot', () => {
    expect(todosViewComponent.element).toMatchSnapshot()
  })
})
