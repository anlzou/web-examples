<!--
 * @Date        : 2020-10-05 22:06:08
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-05 22:42:40
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\views\Post.vue
 * @Describe    : 
-->
<template>
  <div class="post">
    <div v-if="loading">
      <h4>LOADING...</h4>
    </div>
    <div v-if="post">
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
      <Libai></Libai>
    </div>
  </div>
</template>

<script>
import Libai from "../components/Libai";
export default {
  name: "Post",
  components: {
    Libai,
  },
  data() {
    return {
      loading: false,
      post: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.post = {
          title: "诗仙",
          body: "李白-诗集",
        };
      }, 1000);
    },
  },
};
</script>

<style>
</style>