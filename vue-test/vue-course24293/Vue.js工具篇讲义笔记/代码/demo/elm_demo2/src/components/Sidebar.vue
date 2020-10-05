<!--
 * @Date        : 2020-10-04 14:47:14
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 16:11:59
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\components\Sidebar.vue
 * @Describe    : 
-->
<template>
  <ul class="list">
    <li v-for="item in link">
      <a href="#" @click="fun()">
        <el-button>{{item}}</el-button>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      link: ["首页", "资讯", "图文", "关于"],
    };
  },
  methods: {
    fun: function () {
      alert("hello");
    },
  },
};
</script>
<style scoped>
a {
  color: rgb(7, 44, 252);
}
</style>