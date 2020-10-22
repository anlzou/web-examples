/*
 * @Date        : 2020-10-22 10:35:15
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 10:40:05
 * @FilePath    : \js\es6\moudle\cmd\src\modules\module2.js
 * @Describe    : 
 */
/**
 * 定义没有依赖的模块
 */ 
define(function(require, exports, module){
    // 暴露
    module.exports = {
        msg:"这是module2的数据"
    }
})