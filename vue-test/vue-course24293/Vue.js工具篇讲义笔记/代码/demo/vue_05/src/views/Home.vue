<!--
 * @Date        : 2020-09-24 19:26:17
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-24 19:33:39
 * @FilePath    : \demo\cli-05\src\views\Home.vue
 * @Describe    : 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{$store.state.count}}</p>
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
