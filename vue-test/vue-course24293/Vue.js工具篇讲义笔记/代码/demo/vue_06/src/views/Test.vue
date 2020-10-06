<!--
 * @Date        : 2020-10-06 09:33:48
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 09:54:54
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\views\Test.vue
 * @Describe    : 
-->
<template>
  <div class="test">
    私有:{{count}} 共享：{{storeState.count}}
    <br />
    <el-button size="medium" round @click="addCount()">私有+</el-button>
    <el-button size="medium" round @click="increment()">共享+</el-button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Test",
  data() {
    return {
      count: 0,
      storeState: store.state,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
    increment() {
      store.increment();
    },
  },
};
</script>

<style>
</style>