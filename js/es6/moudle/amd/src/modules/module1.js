/*
 * @Date        : 2020-10-22 09:54:06
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 10:00:09
 * @FilePath    : \js\es6\moudle\amd\src\moudles\moudle1.js
 * @Describe    : 
 */
/**
 * 定义一个没有依赖的模块
 */
define(function() {
    let name = "amd";
    function getName(){
        return name.toLowerCase()
    }

    // 暴露接口
    return {getName}
});