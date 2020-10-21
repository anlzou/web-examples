<!--
 * @Date        : 2020-10-21 08:32:01
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 15:40:56
 * @FilePath    : \vue-course23031\project\demo\src\App.vue
 * @Describe    : 
-->
<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <!-- 默认插槽 -->
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
      <!-- <Child></Child> -->
    </div>
  </div>
</template>




<script>
import HelloWorld from "./components/HelloWorld.vue";
import Child from "./components/Child";

export default {
  name: "App",
  components: {
    HelloWorld,
    Child,
  },
};
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
