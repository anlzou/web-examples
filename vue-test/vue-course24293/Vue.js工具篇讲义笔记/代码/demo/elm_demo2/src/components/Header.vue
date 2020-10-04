<!--
 * @Date        : 2020-10-04 14:47:53
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 14:48:01
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\components\Header.vue
 * @Describe    : 
-->
<template>
  <h2 class="title">{{title}}</h2>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>