<!--
 * @Date        : 2020-10-04 09:04:55
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 11:11:12
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\components\Layout01.vue
 * @Describe    : 
-->
<template>
  <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
</template>

<script>
export default {
  name: "Layout01",
  data() {
    return {
      input: "",
    };
  },
};
</script>