<!--
 * @Date        : 2020-09-23 08:12:49
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 08:15:04
 * @FilePath    : \demo\elm_demo1\src\components\Demo3.vue
 * @Describe    : 
-->
<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
};
</script>