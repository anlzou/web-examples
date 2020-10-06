<!--
 * @Date        : 2020-10-05 20:58:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 10:05:03
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\views\About.vue
 * @Describe    : 
-->
<template>
  <div class="about">
    共享：{{storeState.count}}
    <br />
    <el-button size="medium" round @click="decrement">共享-</el-button>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "About",
  data() {
    return {
      storeState: store.state,
    };
  },
  methods: {
    decrement() {
      store.decrement();
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log("组件被激活时会调用这个！即：进入这个组件时~" + this);
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log("组件失活时会调用这个！即：离开这个组件时~" + this);
  //   next();
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("路由改变，组件被复用时~，比如 about/:id 动态路由" + this);
  //   next();
  // },
};
</script>