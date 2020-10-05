<!--
 * @Date        : 2020-10-04 08:58:25
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 19:19:02
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\App.vue
 * @Describe    : 
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <el-button>Home</el-button>
      </router-link>
      <About_menu></About_menu>
      <router-link to="/page3">
        <el-button>Page3</el-button>
      </router-link>
    </div>
    <br />
    <el-button @click="go(-1)">goUp</el-button>
    <el-button @click="go(1)">goDown</el-button>
    <router-view />
  </div>
</template>

<script>
import About_menu from "./components/About_menu";
export default {
  components: {
    About_menu,
  },
  methods: {
    // 上下页跳转
    go(step) {
      this.$router.go(step);
    },
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
