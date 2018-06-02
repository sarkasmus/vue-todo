import { mount } from '@vue/test-utils'
import Todo from '../../../src/components/todo/Todo.vue'

/**
 * Testing component representing single task (todo).
 */
describe('Todo', () => {
  let todoComponent

  /**
   * Inits every testcase.
   */
  beforeEach(() => {
    todoComponent = mount(Todo, {
      propsData: {
        title: 'Task 1',
        description: 'My awesome task',
        finished: false,
        dueDate: '2018-06-02'
      }
    })
  })

  it('should be able to check and uncheck finished and emit an event', () => {
    todoComponent.find('.finish').trigger('click')

    expect(todoComponent.emitted().finished).toBeTruthy()
  })

  it('should be able to delete itself and emit an event', () => {
    todoComponent.find('.remove').trigger('click')

    expect(todoComponent.emitted().removed).toBeTruthy()
  })

  /**
   * Matching snapshot - HTML structure of the component.
   */
  it('should match snapshot', () => {
    expect(todoComponent.element).toMatchSnapshot()
  })
})
