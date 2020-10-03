/*
 * @Date        : 2020-09-30 20:57:02
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-01 14:55:16
 * @FilePath    : \webpack-course24292\project\webpackDemo\webpack.config.js
 * @Describe    : 
 */
/**webpack4的配置
 * */
module.exports = {
    // webpack4需要添加这个配置，development为开发环境，production为生产环境
    mode: "development",
    // devtool: 'eval-source-map', // 在这里配置devtool
    entry: __dirname + "/app/main.js", //唯一入口文件
    output: {
        path: __dirname + "/common", // 打包后的文件存放的地方
        filename: "index.js" // 打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./common", // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
    module: { // 这里配置Bobal
        rules: [{
            test: /(\.jsx|\.js)$/,
            use:{
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },
        // { // 这里配置这两个工具
        //     test: /\.css$/,
        //     exclude: /node_modules/,
        //     use: [ // 请注意这里对同一个文件引入多个loader的方法。
        //         {
        //             loader: "style-loader"
        //         }, {
        //             loader: "css-loader",
        //             options: {
        //                 modules: true, // 指定启用css modules
        //                // 指定css的嘻哈类名格式
        //                 localIdentName: '[name]__[local]--[hash:base64:5]'
        //             }
        //         }
        //     ]
        // },
        {
            test: /\.css$/,
            // loader: 'style-loader!css-loader?modules'//顺序不能乱style-loader!css-loader
            use: ['style-loader', 'css-loader'],
        }
        ]
    }
}