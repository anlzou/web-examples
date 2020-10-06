<!--
 * @Date        : 2020-10-05 22:28:37
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-05 23:27:15
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\components\Libai.vue
 * @Describe    : https://www.shicimingju.com/chaxun/zuozhe/1.html
-->
<template>
  <div>
    <pre :v-bind="setText()">{{text}}</pre>
  </div>
</template>

<script>
export default {
  name: "Libai",
  data() {
    return {
      text: "",
      text1:
        "长干行二首\n\
[唐] 李白\n\
其一\n\
妾发初覆额，折花门前剧。\n\
郎骑竹马来，绕床弄青梅。\n\
同居长干里，两小无嫌猜，\n\
十四为君妇，羞颜未尝开。\n\
低头向暗壁，千唤不一回。\n\
十五始展眉，愿同尘与灰。\n\
常存抱柱信，岂上望夫台。\n\
十六君远行，瞿塘滟滪堆。\n\
五月不可触，猿声天上哀。\n\
门前迟行迹，一一生绿苔。\n\
苔深不能扫，落叶秋风早。\n\
八月胡蝶来，双飞西园草。\n\
感此伤妾心，坐愁红颜老。\n\
早晚下三巴，预将书报家。\n\
相迎不道远，直至长风沙。\n\
\n\
其二\n\
忆妾深闺里，烟尘不曾识。\n\
嫁与长干人，沙头候风色。\n\
五月南风兴，思君下巴陵。\n\
八月西风起，想君发扬子。\n\
去来悲如何，见少离别多。\n\
湘潭几日到，妾梦越风波。\n\
昨夜狂风度，吹折江头树。\n\
淼淼暗无边，行人在何处。\n\
好乘浮云骢，佳期兰渚东。\n\
鸳鸯绿蒲上，翡翠锦屏中。\n\
自怜十五余，颜色桃花红。\n\
那作商人妇，愁水复愁风。",
      text2:
        "静夜思\n\
[唐] 李白\n\
床前明月光，疑是地上霜。\n\
举头望明月，低头思故乡。",
    };
  },
  methods: {
    setText() {
      this.text = this.text1;
    },
  },
};
</script>

<style>
</style>