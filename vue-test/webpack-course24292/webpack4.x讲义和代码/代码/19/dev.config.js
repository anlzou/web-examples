/*
 * @Date        : 2020-07-10 20:13:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-03 16:58:55
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\代码\19\dev.config.js
 * @Describe    : 
 */
//合并js插件
const { merge } = require('webpack-merge')
//公共基础配置
const base = require('./base.config')

//开发环境配置
module.exports = merge(base, {

    //devServer
    devServer: {
        port : 3000,
        stats : 'minimal',
        //代理
        proxy : {
            '/api' : {
                target : 'https://cdn.ycku.com',
                changeOrigin : true,
                pathRewrite : {
                    '^/api' : ''
                }
            }
        }
    },

    //devTool
    devtool: 'eval-source-map',

    //开发模式
    mode : "development"
})