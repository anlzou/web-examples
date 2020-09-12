<template>
  <div style="width: 200px">
    <label>可自适应文本高度的文本域</label>
    <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="textarea1">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea2">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "Input-autosize",
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
</style>