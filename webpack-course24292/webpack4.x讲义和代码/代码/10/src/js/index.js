/*
 * @Date        : 2020-07-10 20:13:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-02 17:04:15
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\代码\10\src\js\index.js
 * @Describe    : 
 */
require('../css/base.css');
require('../css/less.less');

const name = require('./module.js');
const ts = require('../img/ts.png');
const loading = require('../img/loading.gif');
console.log(name);
console.log(ts);
console.log(loading);

let fn = (x, y) => x + y;
console.log(fn(10,20));

// class Person {
//     #name;
//     constructor() {
//         this.#name = 'Mr.Lee'
//     }
// }

// var foo = bar;



