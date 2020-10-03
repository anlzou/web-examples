/*
 * @Date        : 2020-07-10 20:13:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-01 21:59:33
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\代码\04\webpack.config.js
 * @Describe    : 
 */
/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

//路径
const path = require('path');
//html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //出口文件
    entry: './src/index.js',

    //出口文件
    output: {
        //文件名
        // filename: "bundle.js",
        filename: "js/bundle.js",
        //路径，绝对路径
        path : path.resolve(__dirname, './dist')
    },

    //devServer
    devServer: {
        port : 3000,
        stats : 'minimal',
    },

    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",        //默认
            // filename: "index.html"
            filename: "html/index.html"
        })
    ],

    //devTool
    devtool: 'inline-source-map',

    //生成模式
    mode : "development"
};