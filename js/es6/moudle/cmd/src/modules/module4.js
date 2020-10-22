/*
 * @Date        : 2020-10-22 10:40:15
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 10:46:24
 * @FilePath    : \js\es6\moudle\cmd\src\modules\module4.js
 * @Describe    : 
 */
/**
 * 有依赖的模块
 */ 
define(function(require, exports, module) {
    /**
     * 引入模块
     * 相对路径
     * 同步引入
     */ 
    let module2 = require("./module2")

    function show(){
        console.log("module4"+module2.msg)
    }

    // 暴露
    exports.show = show

    /**
     * 异步引入
     */ 
    require.async('./module3',function(module3){
        console.log("异步引入module3"+module3.MODULE3_MSG)
    })
});