/*
 * @Date        : 2020-07-10 20:13:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-02 09:24:10
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\代码\08\postcss.config.js
 * @Describe    : 
 */
/*
    postcss配置文件
 */

// const AutoPrefixer = require('autoprefixer');
const PostPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins : [
        new PostPresetEnv({
            browsers : [
                '> 0.15% in CN'
                //'ie >= 8'
            ]
        })
    ]
};