<!--
 * @Date        : 2020-09-23 09:04:07
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 09:21:07
 * @FilePath    : \demo\elm_demo1\src\components\Demoe4.vue
 * @Describe    : 
-->
<template>
  <h3 class="my_color">{{msg}}</h3>
</template>

<script>
export default {
  name: "Demo4",
  props: {
    msg: {
      type: String,
      default: "Demo4",
    },
  },
  methods: {},
  data() {},
};
</script>

<style scoped>
.my_color {
  color: aquamarine;
}
</style>