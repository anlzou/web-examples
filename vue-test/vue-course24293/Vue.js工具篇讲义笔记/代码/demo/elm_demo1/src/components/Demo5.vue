<!--
 * @Date        : 2020-09-23 09:26:09
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 09:30:25
 * @FilePath    : \demo\elm_demo1\src\components\Demo5.vue
 * @Describe    : 
-->
<template>
  <div id="example-1">
    <button @click="show = !show">Toggle render</button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Demo5",
  props: {},
  methods: {},
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>