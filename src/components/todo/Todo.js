export default {
  name: 'Todo',
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    finished: {
      type: Boolean
    },
    dueDate: {
      type: String
    }
  },
  data () {
    return {
      date: new Date(this.dueDate)
    }
  },
  methods: {
    finish () {
      this.$emit('finished')
    },

    remove () {
      this.$emit('removed')
    }
  },
  filters: {
    day (day: number) {
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

    month (month: number) {
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
