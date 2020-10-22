/*
 * @Date        : 2020-10-22 09:07:13
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 09:36:36
 * @FilePath    : \js\es6\moudle\webpack.config.js
 * @Describe    : es6_moudle
 */
const path = require('path'); //1.引入path包
module.exports = {
    entry: './src/es6_moudle/main.js',
    output: { 
        path: path.resolve(__dirname, 'dist'),//2.修改output对象的path属性
        filename: 'bundle.js'
    },
    //生成模式
    mode: "development"
}