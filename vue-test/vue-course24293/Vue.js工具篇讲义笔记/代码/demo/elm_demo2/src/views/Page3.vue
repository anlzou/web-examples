<!--
 * @Date        : 2020-10-04 14:41:53
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 14:58:11
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\views\Page3.vue
 * @Describe    : 
-->
<template>
  <div>
    <Header title="欢迎来到 Vue-cli"></Header>
    <Sidebar></Sidebar>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
export default {
  name: "Page3",
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>