/*
 * @Date        : 2020-10-22 21:08:06
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 21:54:20
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\axios01\app1.js
 * @Describe    : 
 */
const axios = require('axios')

const cross_domain = "http://cdn.liyanhui.com/data.json"
const uncross_domain = "https://cdn.ycku.com/data.json"

/**
 * 在node环境下支持可跨域与不可跨域请求
 * 浏览器环境不支持不可跨域请求
*/
axios.get(uncross_domain)
    .then(result => {
        console.log(result.data)
    })
    .catch(error => {
        console.log(error)
    })