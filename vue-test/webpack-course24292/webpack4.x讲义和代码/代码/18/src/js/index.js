/*
 * @Date        : 2020-07-10 20:13:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-03 16:06:17
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\代码\18\src\js\index.js
 * @Describe    : 
 */
require('css/base');
require('css/less');
require('css/strong');

//import ts
import { output } from "./type"

//console.log(output('Mr.Wang'))


import axios from 'axios'

// axios.get('https://cdn.liyanhui.com/data.json').then(res => {
//     console.log("可跨域")
//     console.log(res.data)
// })

// 无法直接跨域请求
// axios.get("https://cdn.ycku.com/data.json").then(res => {
//     console.log("不可跨域，需要代理")
//     console.log(res.data);
// })

axios.get('/api/data.json').then(res => {
    console.log("可跨域，已经代理");
    console.log(res.data);
})


const name = require('./module')
const ts = require('../img/ts.png')
const loading = require('../img/loading.gif')
// console.log(name)
// console.log(ts)
// console.log(loading)

let fn = (x, y) => x + y
//console.log(fn(10,20))

class Person {
    #name;
    constructor() {
        this.#name = 'Mr.Lee'
    }
}




