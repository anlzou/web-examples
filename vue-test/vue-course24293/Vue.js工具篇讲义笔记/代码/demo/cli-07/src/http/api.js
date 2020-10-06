/*
 * @Date        : 2020-10-06 19:52:16
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-06 19:54:57
 * @FilePath    : \web-test\vue-test\vue-course24293\Vue.js工具篇讲义笔记\代码\demo\cli-07\src\http\api.js
 * @Describe    : 
 */
import axios from "axios"

// 封装
export const get = (url) => {
    return new Promise((ok, no) => {
        axios.get(url).then(res => {
            ok(res.data);
        }).catch(err => {
            no(err.data)
        })
    })
}