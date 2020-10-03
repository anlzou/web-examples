/*
 * @Date        : 2020-07-10 20:13:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-03 10:13:38
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\代码\17\src\js\index.js
 * @Describe    : 
 */
//base.css
require('css/base');
require('css/less');
require('css/strong');

//import ts
import { output } from "./type"

//console.log(output('Mr.Wang'))

console.log(123);

//index.js
import {name} from './module'

console.log(name)

if (module.hot) {
    module.hot.accept(['./module'], () => {
        console.log(name)
    })
}


const ts = require('../img/ts.png');
const loading = require('../img/loading.gif');
// console.log(name);
// console.log(ts);
// console.log(loading);

let fn = (x, y) => x + y;
// console.log(fn(10, 20));

class Person {
    #name;

    constructor() {
        this.#name = 'Mr.Lee';
    }
}