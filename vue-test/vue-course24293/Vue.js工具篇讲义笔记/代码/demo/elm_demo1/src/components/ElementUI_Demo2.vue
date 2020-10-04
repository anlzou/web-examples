<!--
 * @Date        : 2020-09-22 23:27:33
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 08:12:32
 * @FilePath    : \demo\elm_demo1\src\components\ElementUI_Demo2.vue
 * @Describe    : 
-->
<template>
  <!-- select 1 -->
  <div id="example-4">
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "",
    };
  },
};
</script>