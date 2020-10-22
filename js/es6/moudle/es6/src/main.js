/*
 * @Date        : 2020-10-22 16:12:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 19:31:07
 * @FilePath    : \js\es6\moudle\es6\src\main.js
 * @Describe    :
 */
/**
 * 引入模块
 * 1. 通过解构的方式获取模块中暴露出来的内容
*/
import { bar, MODULE1_ARR } from './modules/module1.js'
import module2 from './modules/module2.js';

module2.foo()
bar()
console.log(MODULE1_ARR)