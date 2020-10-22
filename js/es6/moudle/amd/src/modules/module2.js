/*
 * @Date        : 2020-10-22 09:54:14
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 10:22:25
 * @FilePath    : \js\es6\moudle\amd\src\modules\module2.js
 * @Describe    : 
 */
/**
 * 定义一个有引用的模块
 * */

define([
    'module1',
], function(moudle1) {
    function sayHello(){
        alert('Hello'+moudle1.getName())
    }

    // 暴露接口
    return {sayHello}
});