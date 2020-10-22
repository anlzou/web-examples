/*
 * @Date        : 2020-10-22 10:38:13
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 10:45:53
 * @FilePath    : \js\es6\moudle\cmd\src\modules\module3.js
 * @Describe    : 
 */
/**
 * 定义没有依赖的模块 
 */ 
define(function(require, exports, module) {
    const MOUDLE3_MSG = "这是module3中的数据"
    // 暴露
    exports.MOUDLE3_MSG = MOUDLE3_MSG
});