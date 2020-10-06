<!--
 * @Date        : 2020-10-06 10:09:17
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 10:24:58
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\cli-07\src\views\Home.vue
 * @Describe    : 
-->
<template>
  <div class="home">
    共享:{{$store.state.count}}
    <br />
    <el-button @click="decrement">共享-1</el-button>
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
  methods: {
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
