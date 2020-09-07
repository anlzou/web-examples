<!--
 * @Date        : 2020-09-07 21:51:45
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-07 21:57:17
 * @FilePath    : \web-test\vue-test\vue-course15560\assets\my.vue
 * @Describe    : 
-->
<template>
  <div id="app">
    <p v-bind:class="{active:isActive}">我是p标签</p>
  </div>
</template>

<script>
var app = new Vue({
  el: "#app",
  data: {
    ifActive: true,
  },
});
export default {};
</script>

<style>
.active {
  background-color: aqua;
}
</style>