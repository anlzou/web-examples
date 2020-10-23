/*
 * @Date        : 2020-10-23 08:28:58
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-23 09:47:03
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\axios01\app2.js
 * @Describe    : 
 */
const axios = require('axios')

const cross_domain = "http://cdn.liyanhui.com/data.json"
const uncross_domain = "https://cdn.ycku.com/data.json"

/**
 * 1.在node环境下支持可跨域与不可跨域请求
 * 2.浏览器环境不支持不可跨域请求
 * 3.配置信息
*/
// axios({
//     method: 'get',
//     url: cross_domain,
//     params: {
//         id: 19,
//         status: 1,
//     }
// })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })

/**
 * 并发操作
 * node环境不支持并发请求
*/
axios.all([
    axios({
        url: 'https://cdn.liyanhui.com/data.json',
        data: '1.异步'
    }),
    axios({
        url: 'https://cdn.liyanhui.com/data.json',
        data: '2.异步'
    }),
    axios({
        url: 'https://cdn.liyanhui.com/data.json',
        data: '3.异步'
    }),
]).then(value => {
    for (let i = 0; i < value.length; i++) {
        console.log(value[i].config.data);
    }
})