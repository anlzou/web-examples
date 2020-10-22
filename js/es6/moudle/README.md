<!--
 * @Date        : 2020-10-21 22:48:27
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 08:46:24
 * @FilePath    : \js\es6\moudle\README.md
 * @Describe    : 
-->
# ES6模块&服务器端代码打包到浏览器端运行
## 实现模块化
需要创建`package.json`文件
```
npm init -y
```
添加
```json
"type":"module"
```

### 例如
```json
{
  "name": "moudle",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 打包
安装webpack
```
npm i -D webpack webpack-cli
```

### 指令
```
# npx 自动找到包
npx webpack -v
```