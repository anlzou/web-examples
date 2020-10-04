<!--
 * @Date        : 2020-09-22 23:30:51
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 09:28:28
 * @FilePath    : \demo\elm_demo1\src\page\Page_Demo2.vue
 * @Describe    : 
-->
<template>
  <div>
    <!-- <Demo2></Demo2>
    <Demo3></Demo3>-->

    <!-- <Demo4 msg="anlzou"></Demo4> -->
    <Demo5></Demo5>
  </div>
</template>

<script>
import Demo2 from "../components/ElementUI_Demo2.vue";
import Demo3 from "../components/Demo3";
import Demo4 from "../components/Demo4";
import Demo5 from "../components/Demo5";

export default {
  name: "Page_Demo2",
  components: {
    Demo2,
    Demo3,
    Demo4,
    Demo5,
  },
};
</script>

<style>
</style>
