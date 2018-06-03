// @flow

import Todo from '../todo/Todo.vue'

export default {
  name: 'TodosView',
  components: {
    Todo
  },
  data () {
    return {
      date: new Date()
    }
  },
  computed: {
    todos () : Array<{title: string, description: string, finished: boolean, dueDate: string}> {
      return this.$store.getters.todos
    }
  },
  methods: {
    finish (id: number) : void {
      this.$store.dispatch('finish', id)
    },

    remove (id: number) : void {
      this.$store.dispatch('remove', id)
    }
  },
  filters: {
    day (day: number) : string {
      let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]

      return days[day]
    },

    month (month: number) : string {
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]

      return months[month]
    }
  }
}
