webpack 打包

webpack.congig.js配合
```js
//在webpack-03目录中
/*
webpack 构建时，会自动读取此文件
*/

//获取当前路径
const path = require('path');

module.exports = {
    //入口文件
    entry:'./src/index.js',

    //出口文件
    output:{
        //文件名
        filename:'bundle.js',
        //路径，要写绝对路径
        path:path.resolve(_dirname,'dist')
    },

    //生成模式
    modle:"development"
}
```

运行
```
//在webpack-03目录中
webpack
```