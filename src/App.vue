<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    background-color: rgb(34, 199, 142);
  }

  /*  */
  #app {
    padding: 50px;
    width: 800px;
    height: 550px;
    margin: auto;
    margin-top: 150px;
    background-color: white;
    border-radius: 50px;
    /*box-shadow: 0px 0px 10px rgb(98, 98, 98);*/
  }

  .today {
    text-align: center;
  }
</style>
