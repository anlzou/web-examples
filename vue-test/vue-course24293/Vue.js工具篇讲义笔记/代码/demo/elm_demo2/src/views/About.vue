<!--
 * @Date        : 2020-10-04 08:58:25
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 17:10:20
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\views\About.vue
 * @Describe    : 
-->
<template>
  <div>
    <h3>User Id : {{$route.params.id}}</h3>
    <router-link to="/profile">AboutProfile</router-link>
    <router-link to="/posts">AboutPosts</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import AboutProfile from "../views/about/AboutProfile";
import AboutPosts from "../views/about/AboutPosts";
export default {
  components: {
    AboutProfile,
    AboutPosts,
  },
};
</script>
