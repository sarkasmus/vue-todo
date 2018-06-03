import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.devtools = true

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  actions: {
    finish ({commit}, id) {
      commit('FINISH', id)
    },

    remove ({commit}, id) {
      commit('REMOVE', id)
    },

    create ({commit}, payload) {
      commit('CREATE', payload)
    },

    edit ({commit}, payload) {
      commit('EDIT', payload)
    }
  },
  getters: {
    todos (state) {
      return JSON.parse(JSON.stringify(state.todos))
    },

    lastTodoId (state) {
      return state.todos.length - 1
    }
  },
  mutations: {
    FINISH (state, id) {
      state.todos[id].finished = !state.todos[id].finished
    },

    REMOVE (state, id) {
      state.todos[id].deleted = true
    },

    CREATE (state, payload) {
      state.todos.push({
        title: payload.title,
        description: payload.description,
        finished: false,
        dueDate: payload.dueDate,
        deleted: false
      })
    },

    EDIT (state, payload) {
      state.todos[payload.id].title = payload.title
      state.todos[payload.id].description = payload.description
      state.todos[payload.id].dueDate = payload.dueDate
    }
  },
  state: {
    todos: [
      {
        title: 'Reeeeeally important task 😎!',
        description: 'Be so kind and mark me as finished',
        finished: false,
        dueDate: '2018-06-03',
        deleted: false
      }
    ]
  }
})
