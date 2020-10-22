/*
 * @Date        : 2020-10-22 20:47:01
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 21:03:27
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\demo02\app1.js
 * @Describe    : 
 */
/**
 * CommonJS规范，服务端模块导入
 * Mock.js随机数据生成器
*/
const Mock = require('mockjs')

/**
 * 方式一
 * 语法规则：
 * @city
 * @cname
*/
const data = Mock.mock({
    'list|1-10': [{
        full: "@cname -- @city",
    }]
})

// 方式二
console.log(Mock.mock('@name'))

// 方式三
console.log(Mock.Random.id())
console.log(Mock.Random.datetime())
console.log(Mock.Random.date('mm/dd/yyyy'))


// json转字符串
const data_str = JSON.stringify(data, null, 4);
// console.log(data_str)