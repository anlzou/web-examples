<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Element></Element>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Element from './components/ElementUI'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Element
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
