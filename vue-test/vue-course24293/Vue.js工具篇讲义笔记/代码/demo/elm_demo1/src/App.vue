<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App Test"/> -->
	<ElmentUI_Demo1></ElmentUI_Demo1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ElmentUI_Demo1 from './components/ElmentUI_Demo1.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
	ElmentUI_Demo1
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