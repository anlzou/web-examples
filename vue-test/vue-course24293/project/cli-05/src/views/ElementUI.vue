<template>
  <div align="center">
    <Input1></Input1><br>
    <Input2></Input2><br>
    <Input3></Input3><br>
  </div>

</template>

<script>
import Input1 from "../components/ElementUI/input/Input-clearable";
import Input2 from "../components/ElementUI/input/Input-show-password";
import Input3 from "../components/ElementUI/input/Input-autosize";
export default {
name: "ElementUI",
  components:{
    Input1,
    Input2,
    Input3
  }
}
</script>

<style scoped>

</style>