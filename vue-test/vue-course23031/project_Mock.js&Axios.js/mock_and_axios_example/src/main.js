/*
 * @Date        : 2020-10-23 10:06:58
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-23 10:26:01
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\mock_and_axios_example\src\main.js
 * @Describe    : 
 */
const axios = require("axios")
const Mock = require('mockjs')

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

//mock 拦截，并随机生成填充数据
Mock.mock('https://cdn.liyanhui.com/data.json', {
    'list|5-10': [{
        'id|+1': 1,
        'username': '@cname',
        'email': '@email',
        'price': '@integer',
        'gender': '@boolean'
    }]
})