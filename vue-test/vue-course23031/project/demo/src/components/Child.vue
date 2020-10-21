<!--
 * @Date        : 2020-10-21 08:36:23
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 15:36:17
 * @FilePath    : \vue-course23031\project\demo\src\components\Child.vue
 * @Describe    : 
-->
<template>
  <div>
    <base-layout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
  </div>
</template>

<script>
export default {
  name: "Child",
};
</script>
