<template>
    <div>Msg: {{msg}}</div>
</template>
<style>
</style>
<script>
    export default {
      data () {
        return {
          msg: 'Todos vue'
        }
      },
      created () {
        console.log('Component Todolist creat')
        this.fetchData()
      },
      methods: {
        fetchData: function () {
          return this.fetchPage(1)
        },
        fetchPage: function (page) {
          this.$http.get('http://todos.dev:8080/api/v1/task?page=' + page).then((response) => {
            console.log(response)
          }, (response) => {
            console.log(response)
          })
        }
      }
    }

</script>
