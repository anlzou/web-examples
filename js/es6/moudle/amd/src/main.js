/*
 * @Date        : 2020-10-22 09:53:36
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 10:21:44
 * @FilePath    : \js\es6\moudle\amd\src\main.js
 * @Describe    : 
 */
(function(){
    // 配置
    require.config({
        // 模块名称和路径进行映射
        paths:{
            "module1":"./modules/module1",
            "module2":"./modules/module2",
        }
    })
    //引入模块
    require(['module2'],function(module2){
        module2.sayHello()
    })
})()