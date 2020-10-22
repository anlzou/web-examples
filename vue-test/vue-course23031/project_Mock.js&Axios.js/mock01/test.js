/*
 * @Date        : 2020-10-21 16:44:31
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 16:57:02
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\demo01\test.js
 * @Describe    : 
 */
// 使用 Mock
var Mock = require('../node_modules/mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-20': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})

/**
 * 输出结果，随机生成数据的条数
 * JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
 * https://www.runoob.com/js/javascript-json-stringify.html
 */
console.log(JSON.stringify(data, null, 4))