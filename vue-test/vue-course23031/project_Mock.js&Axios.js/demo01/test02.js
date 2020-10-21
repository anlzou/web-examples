/*
 * @Date        : 2020-10-21 16:44:31
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 21:39:16
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\demo01\test02.js
 * @Describe    : 
 */
exports.getData = function getData(){
    // 使用 Mock
    var Mock = require('mockjs')
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 20 个元素
        'list|99-100': [{
            'id|+1': 1,
            'name':'@cname',
            'city':'@city',
            'score|1-99.1-3':1
        }]
    })

    /**
     * 输出结果，随机生成数据的条数
     * JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
     * https://www.runoob.com/js/javascript-json-stringify.html
     */
    // 转为字符串
    // var data = JSON.stringify(data, null, 4);
    // console.log(data)
    return  data
 }();