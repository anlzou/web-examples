/*
 * @Date        : 2020-10-23 09:49:01
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-23 09:56:18
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\axios01\app3.js
 * @Describe    :
 */
/**
 * 请求拦截
*/

const axios = require("axios")

// 实例化
const myAxios = axios.create();
// 全局默认值设置，baseUrl 会自动在 url 前面添加
myAxios.defaults.baseURL = 'https://cdn.liyanhui.com';

//或
// const myAxios = axios.create({
//     baseURL: 'https://cdn.liyanhui.com',
// });

//添加请求拦截
myAxios.interceptors.request.use(config => {
    // 在访问数据前，对访问进行处理
    console.log('loading...');
    return config;
});

//添加响应拦截
myAxios.interceptors.response.use(response => {
    //在输出数据前，对数据进行拦截处理
    console.log('响应拦截...')
    return response.data;
});

//requret 通用
myAxios.request({
    method: 'get',
    url: '/data.json'
}).then(res => {
    console.log(res);
});