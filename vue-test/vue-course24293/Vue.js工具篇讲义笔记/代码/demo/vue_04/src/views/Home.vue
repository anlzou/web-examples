<!--
 * @Date        : 2020-09-23 09:40:38
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 09:42:36
 * @FilePath    : \demo\cli-04\src\views\Home.vue
 * @Describe    : 
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
