<!--
 * @Date        : 2020-10-04 15:51:25
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-04 16:09:11
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\elm_demo2\src\components\About_menu.vue
 * @Describe    : 
-->
<template>
  <el-button>
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <router-link to="/about">About</router-link>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link to="/about/5">about/5</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/about/6">about/6</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-button>
</template>
<script>
export default {
  name: "About_menu",
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

/* 取消下划线 */
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>