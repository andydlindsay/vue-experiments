<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>Server Status: {{ status }}</p>
    <Home></Home>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                status: 'Critcal'
            }
        }
    }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkmagenta;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
