/*
 * @Date        : 2020-09-08 22:15:44
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 22:45:51
 * @FilePath    : \js\moudle-test\circle.js
 * @Describe    : 
 */
function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

// function area(radius) {
//   return Math.PI * radius * radius;
// }

// function circumference(radius) {
//   return 2 * Math.PI * radius;
// }

// console.log('圆面积：' + area(4));
// console.log('圆周长：' + circumference(14));

export {area, circumference}