/*
 * @Date        : 2020-10-21 17:10:00
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 18:49:52
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\demo01\mongodb\test.js
 * @Describe    : 
 */
var User = require('../model/MockUser')
var getData = require('../test02')

var data = JSON.stringify(getData, null, 4);
var obj = JSON.parse(data)
console.log(obj.getData.list[2].name)