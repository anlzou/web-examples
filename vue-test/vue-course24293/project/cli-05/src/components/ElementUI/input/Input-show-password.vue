<template>
  <div style="width: 200px">
    <label>密码框</label>
    <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
  </div>
</template>

<script>
export default {
  name: "Input2",
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
</style>