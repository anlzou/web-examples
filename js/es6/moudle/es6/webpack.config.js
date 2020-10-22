/*
 * @Date        : 2020-10-22 19:19:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 19:19:59
 * @FilePath    : \js\es6\moudle\es6\webpack.config.js
 * @Describe    : 
 */
const path = require('path'); //1.引入path包
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),//2.修改output对象的path属性
        filename: 'bundle.js'
    },
    //生成模式
    mode: "development"
}