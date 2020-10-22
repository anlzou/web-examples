/*
 * @Date        : 2020-10-22 10:35:04
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 11:35:59
 * @FilePath    : \js\es6\moudle\cmd\src\modules\module1.js
 * @Describe    : 
 */
/**
 * 三个参数必须
 * 定义没有依赖的模块
 */ 
define(function(require, exports, module) {
    function show(){
        console.log('module1')
    }

    exports.show = show
});