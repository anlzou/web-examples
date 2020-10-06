<!--
 * @Date        : 2020-10-05 20:58:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 09:19:17
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\views\Home.vue
 * @Describe    : 
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
