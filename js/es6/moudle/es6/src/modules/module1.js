/*
 * @Date        : 2020-10-22 16:12:38
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 19:17:21
 * @FilePath    : \js\es6\moudle\es6\src\modules\module1.js
 * @Describe    : 
 */
export function foo() {
    console.log('module1 foo is called')
}

export let bar = function () {
    console.log('module1 bar is called')
}

export const MODULE1_ARR = ["北京", "Shadow"]