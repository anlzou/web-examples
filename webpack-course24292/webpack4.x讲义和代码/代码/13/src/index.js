/*
 * @Date        : 2020-07-10 20:13:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-02 21:17:11
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\代码\13\src\index.js
 * @Describe    : 
 */
require('./css/base.css');
require('./css/less.less');
require('./css/strong.scss');

//import ts
import { output } from "./ts/type"

console.log(output('Mr.Wang'))


const name = require('./js/module.js')
const ts = require('./img/ts.png')
const loading = require('./img/loading.gif')
console.log(name)
console.log(ts)
console.log(loading)

let fn = (x, y) => x + y
console.log(fn(10,20))

class Person {
    #name;
    constructor() {
        this.#name = 'Mr.Lee'
    }
}




