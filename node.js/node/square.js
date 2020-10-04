/*
 * @Date        : 2020-09-23 13:58:50
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 13:59:24
 * @FilePath    : \demo\node\square.js
 * @Describe    : 
 */
// Assigning to exports will not modify module, must use module.exports
module.exports = class Square {
    //constructor；构造函数
    constructor(width) {
        this.width = width;
    }

    area() {
        return this.width ** 2;
    }
};