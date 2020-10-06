<!--
 * @Date        : 2020-10-05 20:58:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 09:37:18
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\App.vue
 * @Describe    : 
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/post">Post</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/test">Test</router-link>
    </div>
    <transition :name="tName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tName: "",
    };
  },
  watch: {
    $route(to, from) {
      // console.log(to, name);
      if (to.name === "Home") {
        this.tName = "fade";
      } else if (to.name === "About") {
        this.tName = "fade2";
      }
    },
  },
};
</script>

<style>
body {
  background-color: cadetblue;
}

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

/* 
  过渡动效 1
  进入Home
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-to {
  /* 不跳动 */
  display: none;
}

/* 
  过渡动效 2
  进入About
*/
.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 2s;
}
.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}
.fade2-leave-to {
  /* 不跳动 */
  display: none;
}
</style>
