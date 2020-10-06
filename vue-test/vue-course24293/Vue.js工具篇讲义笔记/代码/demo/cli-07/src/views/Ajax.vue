<!--
 * @Date        : 2020-10-06 19:51:45
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 20:17:42
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\cli-07\src\views\Ajax.vue
 * @Describe    : 
-->
<template>
  <div>
    <!-- <h3>{{name}}</h3> -->
    <h4 v-for="(item, index) in some" :key="index">{{item.username}}</h4>
    <el-button @click="getName">get data</el-button>
  </div>
</template>

<script>
import { get } from "@/http/api.js";
export default {
  data() {
    name: "Ajax";
    return {
      name: "",
      some: "",
    };
  },
  methods: {
    getName() {
      get("/data.json").then((data) => {
        this.name = data[0].username;
        this.some = data;
        // console.log(this.some);
      });
    },
  },
};
</script>

<style>
</style>