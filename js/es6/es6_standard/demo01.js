/*
 * @Date        : 2020-10-21 23:33:33
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 23:40:23
 * @FilePath    : \js\es6\style\demo01.js
 * @Describe    : ES6编程规范：https://es6.ruanyifeng.com/#docs/style
 */
const a = 'ES6 test'
const b = `I say '${a}' that.`

// console.log(b)

// 解构
function getFullName({ firstName, lastName }) {
    console.log(firstName+lastName)
}
const obj = {
    firstName:"anl",
    lastName:"zou"
}
getFullName(obj)