<!--
 * @Date        : 2020-09-23 10:00:48
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 10:15:18
 * @FilePath    : \demo\cli-04\src\components\about\about2.vue
 * @Describe    : 
-->
<template>
  <div id="example-3">
    <button @click="show = !show">Toggle render</button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>
