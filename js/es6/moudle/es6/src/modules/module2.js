/*
 * @Date        : 2020-10-22 16:14:37
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 20:05:24
 * @FilePath    : \js\es6\moudle\es6\src\modules\module2.js
 * @Describe    : 
 */
/**
 * 统一暴露
*/
function foo() {
    console.log('module2 foo is called')
}

let bar = function () {
    console.log('module2 bar is called')
}

const MODULE2_ARR = ["A", "B"]

/**
 * 默认暴露
 * 不暴露bar模块
 * default只能使用一次
*/
export default { foo, MODULE2_ARR }