<!--
 * @Date        : 2020-09-24 19:26:17
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-24 19:38:27
 * @FilePath    : \demo\cli-05\src\views\About.vue
 * @Describe    : 
-->
<template>
  <div class="about">
    <h1>This is an about page {{$store.state.count}}</h1>
    <button @click="countButten">加+1</button>
  </div>
</template>
<script>
export default {
  methods: {
    countButten() {
      this.$store.commit("count");
    },
  },
};
</script>