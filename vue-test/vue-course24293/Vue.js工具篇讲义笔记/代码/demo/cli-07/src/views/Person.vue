<!--
 * @Date        : 2020-10-06 11:30:03
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 12:02:05
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\cli-07\src\views\Person.vue
 * @Describe    : 
-->
<template>
  <div>
    <ul>
      <li>姓名:{{name}}</li>
      <li>性别:{{$store.state.sex}}</li>
      <li>年龄:{{$store.state.age}}</li>
    </ul>
    <input type="text" @input="setAge" :value="age" />
    <br />
    {{say}}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Person",
  //   数组方式
  //   computed: mapState(["name", "sex", "age"]),
  // 对象方式
  computed: {
    //   属性计算
    say(state) {
      return "you are " + state.age + " year old";
    },
    // 对象展开
    ...mapState({
      name: (state) => state.name,
      sex: "sex",
      age(state) {
        return state.age;
      },
    }),
  },
  methods: {
    setAge(e) {
      this.$store.commit("setAge", e.target.value);
    },
  },

  //   //传统方法
  //   computed: {
  //     //  name() 等效 $store.state.sex
  //     name() {
  //       return this.$store.state.name;
  //     },
  //     age: {
  //       get() {
  //         return this.$store.state.age;
  //       },
  //       set(value) {
  //         this.$store.commit("setAge", value);
  //       },
  //     },
  //   },
};
</script>

<style>
</style>