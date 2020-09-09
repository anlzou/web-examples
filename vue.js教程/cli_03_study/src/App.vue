<template>
  <div id="app">
	  <Header title="Wellcome to my Vue app!"></Header>
	  <Sidebar></Sidebar>
	  <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"
import Sidebar from "./components/Sidbar.vue"
import Header from "./components/Header.vue"

export default {
  name: 'app',
  components: {
    Footer,
	Sidebar,
	Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
