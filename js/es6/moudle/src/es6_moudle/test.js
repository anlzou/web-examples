/*
 * @Date        : 2020-10-21 22:03:50
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 09:35:10
 * @FilePath    : \js\es6\moudle\src\es6_moudle\test.js
 * @Describe    : 
 */
// CommonJS
// exports.myName = myName = "Tom";
let myName = "Tom";
let myAge = 20;
let myfn = function(){
    return "My name is" + myName + "! I'm '" + myAge + "years old."
}
// let myClass =  class myClass {
//     static a = "yeah!";
// }

// ES6
// export { myName, myAge, myfn, myClass };
export { myName, myAge, myfn};