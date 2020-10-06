<!--
 * @Date        : 2020-10-06 10:09:17
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 10:22:00
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\cli-07\src\views\About.vue
 * @Describe    : 
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    共享{{$store.state.count}}
    <br />
    <el-button @click="increment">共享+1</el-button>
  </div>
</template>
<script>
export default {
  name: "About",
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>
