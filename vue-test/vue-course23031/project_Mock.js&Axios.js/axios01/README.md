<!--
 * @Date        : 2020-10-23 09:56:52
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-23 10:01:22
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\axios01\README.md
 * @Describe    : 
-->
# Axios
- ## [axios](http://www.axios-js.com/)
1. 易用、简洁且高效的http库

### 拦截器
在请求或响应被 then 或 catch 处理前拦截它们。
```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
  ```
example
- [app3.js](app3.js)