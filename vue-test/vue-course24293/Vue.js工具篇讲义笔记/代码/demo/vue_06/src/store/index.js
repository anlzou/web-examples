/*
 * @Date        : 2020-10-06 09:46:18
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 10:00:57
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\vue_06\src\store\index.js
 * @Describe    : 
 */
const store = {
    //共享数据
    state: {
        count: 0
    },
    //共享数据累加
    increment() {
        this.state.count++;
    },
    //共享数据累减
    decrement() {
        this.state.count--;
    }
}

export default store;