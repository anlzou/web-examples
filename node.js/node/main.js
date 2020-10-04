/*
 * @Date        : 2020-09-23 13:53:55
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 14:00:00
 * @FilePath    : \demo\node\main.js
 * @Describe    : 
 */
const circle = require('./circle.js');
const Square = require('./square.js');

const mySquare = new Square(2);

console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
console.log(`The area of mySquare is ${mySquare.area()}`);