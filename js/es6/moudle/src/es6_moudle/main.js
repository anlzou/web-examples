/*
 * @Date        : 2020-10-21 22:04:10
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 09:35:33
 * @FilePath    : \js\es6\moudle\src\es6_moudle\main.js
 * @Describe    : 
 */
// CommonJS
// let { myName, myAge, myfn, myClass } = require("./test");
// ES6
// import { myName, myAge, myfn, myClass } from './test.js';
import { myName, myAge, myfn} from './test.js';

console.log(myfn());// My name is Tom! I'm 20 years old.
console.log(myAge);// 20
console.log(myName);// Tom
// console.log(myClass.a );// yeah!