<template>
  <div style="width: 200px">
    <label>可清空</label>
      <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable>
      </el-input>
  </div>
</template>

<script>
export default {
  name: "Input1",
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