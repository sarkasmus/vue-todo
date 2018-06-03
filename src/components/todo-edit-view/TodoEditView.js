export default {
  name: 'TodoEditView',
  data () {
    // Load todo data.
    if (typeof this.$store.getters.todos[this.$route.params.id] !== 'undefined') {
      return {
        title: this.$store.getters.todos[this.$route.params.id].title,
        description: this.$store.getters.todos[this.$route.params.id].description,
        dueDate: this.$store.getters.todos[this.$route.params.id].dueDate
      }
    }

    return {
      title: '',
      description: '',
      dueDate: ''
    }
  },
  methods: {
    save () : void {
      if (this.$route.name === 'create') {

        // Create a new todo.
        this.$store.dispatch('create', {
          title: this.title,
          description: this.description,
          dueDate: this.dueDate
        })
      } else {

        // Edit todo of id.
        this.$store.dispatch('edit', {
          id: this.$route.params.id,
          title: this.title,
          description: this.description,
          dueDate: this.dueDate
        })
      }

      this.$router.push('/')
    }
  },
  filters: {
    capitalize (text: String) : String {
      if (!text) {
        return ''
      }

      text = text.toString()
      return text.charAt(0).toUpperCase() + text.slice(1)
    }
  }
}
