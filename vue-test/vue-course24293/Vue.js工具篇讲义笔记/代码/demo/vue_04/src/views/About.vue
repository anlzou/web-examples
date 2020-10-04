<!--
 * @Date        : 2020-09-23 09:40:38
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 10:06:54
 * @FilePath    : \demo\cli-04\src\views\About.vue
 * @Describe    : 
-->
<template>
  <div>
    <About_com1></About_com1>
    <About_com2></About_com2>
  </div>
</template>

<script>
import About_com1 from "@/components/about/about1.vue";
import About_com2 from "../components/about/about2";

export default {
  name: "About",
  components: {
    About_com1,
    About_com2,
  },
};
</script>
