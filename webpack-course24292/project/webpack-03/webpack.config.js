/*
 * @Date        : 2020-09-30 10:28:13
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-30 16:52:11
 * @FilePath    : \webpack-course24292\project\webpack-03\webpack.config.js
 * @Describe    : 
 */
//在webpack-03目录中
/*
webpack 构建时，会自动读取此文件
*/

//获取当前路径
const path = require('path');
//html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //入口文件
    entry: './src/index.js',

    //出口文件
    output: {
        //文件名
        filename: 'bundle.js',
        //路径，要写绝对路径
        path: path.resolve(__dirname, 'dist') //路径拼接
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", //值为默认值，源文件
            filename: "index.html" //值为默认值，打包生成的文件名
        })
    ],
    //devServer 自动化
    devServer: {
        publicPath: '/dist', //访问路径
        port: 7788, //独立端口
        stats: 'minimal' //迷你型服务启动信息
    },

    //生成模式
    mode: "development"
}