<!--
 * @Date        : 2020-10-22 10:27:49
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 16:07:47
 * @FilePath    : \js\es6\moudle\README.md
 * @Describe    : 
-->
# 服务端与客户端模块化开发——四种模加载规范
## 学习课程
- [course-22634](http://e-learning.51cto.com/course/22634)

## 规范
- ### CommonJS：服务器端模块同步加载规范
1. 结合wbpack打包成浏览器端运行的代码
```js
/**
 * path: src/modules/module.js
 * 模块导出
*/
module.exports = {
    foo() {
        console.log('module')
    }
}

/**
 * path: src/main.js
 * 模块引入
 */ 
let module = require('./module/module')
module.fun()

/**
 * path: webpack.config.js
 * webpack打包配置
*/
const path = require('path'); // 1.引入path包
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),// 2.修改output对象的path属性
        filename: 'bundle.js'
    },
    // 生成模式
    mode: "development"
}
```
```html
<!-- index.html -->
<script src="./dist/bundle.js"></script>
```

- ### AMD：浏览器端模块异步加载规范
  - [Require.js](https://github.com/requirejs/requirejs)
1. 不需要打包
2. 下载`require.js`包，放入(src/lib/require.js)
```js
/**
 * path: src/modules/module.js
 * 定义一个有引用的模块
 */

define([
    'module1',
], function(moudle1) {
    function sayHello(){
        alert('Hello'+moudle1.getName())
    }

    // 暴露接口
    return {sayHello}
});

/**
 * path: src/main.js
 * 入口文件
 * 立即执行函数
 */ 
(function(){
    // 配置
    require.config({
        // 模块名称和路径进行映射
        paths:{
            "module":"./modules/module",
        }
    })
    //引入模块
    require(['module'],function(module){
        module.sayHello()
    })
})()
```

```html
<!-- index.html -->
<script src="./src/lib/require.js" data-main="./src/main.js"></script>
```

- ### CMD：浏览器端模块同异步加载
  - [Sea.js](https://github.com/seajs/seajs)
1. Sea.js 是一个开源项目，目前由阿里、腾讯等公司共同维护
2. 支持同步&异步引入
3. 项目已不维护
4. 下载`sea.js`包，放入(src/lib/sea.js)
```js
/**
 * path: src/modules/module.js
 * 模块导出
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

/**
 * path: src/main.js
 * 模块引入
*/
define(function (require) {
    let module = require('./modules/module')

    module.fun()
});
```
```html
<!-- index.html -->
<script src="./src/lib/sea.js"></script>
<script>
    seajs.use("./src/main")
</script>
```

- ### ES6：
```

```