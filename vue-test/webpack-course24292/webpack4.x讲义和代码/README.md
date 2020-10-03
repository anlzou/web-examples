<!--
 * @Date        : 2020-10-01 23:25:27
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-03 09:18:36
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\README.md
 * @Describe    : 
-->
# webpack loader (加载器)

## [02.模块打包和配置](../webpack4.x讲义和代码/讲义/02.模块打包和配置.pdf)
- webpack

## [03.DevServer服务](../webpack4.x讲义和代码/讲义/03.DevServer服务.pdf)
- webpack-dev-server

## [04.Plugin部署Html 插件](../webpack4.x讲义和代码/讲义/04.Plugin部署Html插件.pdf)
- [html-webpack-plugin 详解](https://www.cnblogs.com/wonyun/p/6030090.html) [webpack4 之html-webpack-plugin](https://www.jianshu.com/p/08a60756ffda)
  - 为html文件中引入的外部资源如`script`、`link`动态添加每次compile后的hash，防止引用缓存的外部文件问题
  - 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口

## [05.Loader打包CSS文件](../webpack4.x讲义和代码/讲义/05.Loader打包CSS文件.pdf)
1. css-loader：读取和编译 css 文件，转换为样式字符模块；
2. style-loader：将 css 插入到 JavaScript 中；
3. less-loader：读取和编译 less 预处理样式，转换为 css 文件；

## [06.Loader打包图片文件](../webpack4.x讲义和代码/讲义/06.Loader打包图片文件.pdf)
1. file-loader：解析 JavaScipt 和 css 插入的图片；
2. url-loader：将图片转换为 base64 编码字符串；
3. html-loader：将.html 进行打包，从而解析 img 插入问题；

## [07.分离CSS分类打包](../webpack4.x讲义和代码/讲义/07.分离CSS.分类打包.pdf)
- mini-css-extract-plugin [插件 mini-css-extract-plugin 使用的详解（二）](https://www.jianshu.com/p/e92b5bccf42a) [mini-css-extract-plugin插件快速入门](https://www.jianshu.com/p/bf4cb3a67a3a)
  - 把css样式从js文件中提取到单独的css文件中。该插件的主要是为了抽离 css 样式,防止将样式打包在 js 中文件过大和因为文件大网络请求超时的情况。
  - 它为每个包含css的js文件都创建一个css文件。webpack 4.0以前，主要使用extract-text-webpack-plugin插件。

## [08.PostCss兼容性转换](../webpack4.x讲义和代码/讲义/08.PostCss兼容性转换.pdf)
- postcss-loader：CSS语法的兼容性处理
- autoprefixer：插件转换
1. 单有 postcss-loader 还不行，需要搭配创建 autoprefixer 插件转换；
2. 这个插件会在需要兼容性的样式加上 CSS 前缀，比如：-ms、-webkit 等；
3. 我们在 base.css 和 font.css(被@import 导入)，增加需要兼容的 css；
4. postcss-preset-env：CSS4 代码兼容
```js
//请注意：如果使用 postcss-preset-env，就删除 autoprefixer
//因为 post-preset-env 集成了 autoprefixer，不需要再引入设置
```

## [09.Babel转换ES6语法](../webpack4.x讲义和代码/讲义/09.Babel转换ES6语法.pdf)
1. 我们有时需要将 ES6+的语法转换成 ES5，让兼容性更好一些；
2. 这时需要有三个模块需要安装，具体如下：
   - babel-loader：与 Webpack 协同工作的模块，加载处理 js 文件；
   - @babel/core：Babel 编译器的核心模块，是 babel-loader 依赖；
   - @babel/preset-env：Babel 预置器，用于分析 ES6 语法；
   - @babel/plugin-proposal-class-properties：未纳入标准(提案中)的代码

### moudles
```
npm i postcss-preset-env webpack webpack-dev-server  html-webpack-plugin mini-css-extract-plugin css-loader postcss-loader less-loader url-loader html-loader babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-class-properties -D
```

## [10.ESLint校验JS代码](../webpack4.x讲义和代码/讲义/10.ESLint校验JS代码.pdf)
使用 ESLint 来校验 JS 代码；
### 一．安装模块
1. 基本的 ESLint 实现，需要一下安装以下模块：
-  eslint：JS 代码检查工具核心模块；
-  eslint-loader：webpack 协同模块；
2. 首先，先安装 eslint，然后安装配置信息；
```
npm i eslint -D //安装 eslint
eslint --init //安装配置信息
```
PS：期间会让你选择配置信息情况，根据你实际情况选择即可，生成：.eslintrc.json；

PS：网上也会别人生成的配置信息可以拿来用，也可以去官网 eslint.cn/demo 生成信息；

3. 再次，我们安装 eslint-loader 模块；
```
npm i eslint-loader -D
```

### moudles
```
npm i -D webpack-dev-server webpack html-webpack-plugin mini-css-extract-plugin css-loader postcss-loader less-loader url-loader html-loader babel-loader @babel/preset-env @babel/plugin-proposal-class-properties eslint-loader
```

## [11.多页面配置打包](../webpack4.x讲义和代码/讲义/11.多页面配置打包.pdf)
1. 如果我们想生成多个.html 文件，比如 index.html 和 main.html；
2. 此时，我们需要修改一下入口文件和出口文件；
```js
//入口文件
entry: {
  //把需要加载的 js 以键值对方
  index : './src/js/index.js',
  main : './src/js/main.js'
},

//或

//入口文件，也支持 ES6 的箭头函数
entry: () => ({
  index : './src/js/index.js',
  main : './src/js/main.js'
}),
```

### moudles
```
npm i -D webpack-dev-server webpack html-webpack-plugin mini-css-extract-plugin css-loader postcss-loader less-loader url-loader html-loader babel-loader @babel/preset-env @babel/plugin-proposal-class-properties
```

## [12.压缩Html和Css代码](../webpack4.x讲义和代码/讲义/12.压缩Html和Css代码.pdf)
1. 为何要压缩代码？什么情况下要压缩？答：在生产环境下打包时节约资源；
2. 既然在生产环境，那首先要把打包的配置更改为生产环境；
```js
//生成模式
mode : "production",
```
PS：调节为生产环境打包，就会自动将 js 代码进行打包，不需要单独设置；

3. 对于 Html 文件打包，通过 HtmlWebpackPlugin 插件，生成环境会自动压缩；
4. 如果在开发环境中压缩，可以通过配置来设置要压缩的选项：
```js
minify: {
  collapseWhitespace: true, //是否去除空格，默认 false
  removeComments: true, //是否移除注释 默认 false
},
``` 
5. 对于 CSS 文件，就算设置了生成环境，它也不会自动压缩，此时需要另外设置；
```
npm i optimize-css-assets-webpack-plugin -D
```
```js
//获取 css 压缩插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
//插件
plugins: [
  new OptimizeCssAssetsWebpackPlugin(), //压缩 css
],
```

### moudles
```
npm i -D webpack-dev-server webpack html-webpack-plugin mini-css-extract-plugin css-loader postcss-loader less-loader url-loader html-loader babel-loader @babel/preset-env @babel/plugin-proposal-class-properties optimize-css-assets-webpack-plugin
```

## [13.打包Ts和Scss](../webpack4.x讲义和代码/讲义/13.打包Ts和Scss.pdf)
- sass sass-loader node-sass
- typescript ts-loader

### 重构
> problem

- [ ] ts.png图片无法显示

### more
- [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

**概述**

如果一个目录下存在一个`tsconfig.json`文件，那么它意味着这个目录是`TypeScript`项目的根目录。 `tsconfig.json`文件中指定了用来编译这个项目的根文件和编译选项。 一个项目可以通过以下方式之一来编译：

**使用tsconfig.json**
- 不带任何输入文件的情况下调用`tsc`，编译器会从当前目录开始去查找`tsconfig.json`文件，逐级向上搜索父目录。
- 不带任何输入文件的情况下调用tsc，且使用命令行参数`--project`（或`-p`）指定一个包含`tsconfig.json`文件的目录。
当命令行上指定了输入文件时，`tsconfig.json`文件会被忽略。

### moudles
```
npm i -D webpack-dev-server webpack html-webpack-plugin mini-css-extract-plugin css-loader postcss-loader less-loader url-loader html-loader babel-loader @babel/preset-env @babel/plugin-proposal-class-properties optimize-css-assets-webpack-plugin sass sass-loader node-sass typescript ts-loader
```

## [14.Resolve模块解析](../webpack4.x讲义和代码/讲义/14.Resolve模块解析.pdf)
1. 在 import 不限定后缀会出现无法载入；
2. 所以，我们使用了 Resolve 模块解析的中 extensions 来进行配置；
```js
//模块解析
resolve: {
  //导入文件查找的限定后缀，默认.js 和.json
  extensions: ['.ts', '.js', '.json' ]
},
```
PS：导入语句是如果检测不到指定的会报错；

### moudles
```
npm i -D webpack-dev-server webpack html-webpack-plugin mini-css-extract-plugin css-loader postcss-loader less-loader url-loader html-loader babel-loader @babel/preset-env @babel/plugin-proposal-class-properties optimize-css-assets-webpack-plugin sass sass-loader node-sass typescript ts-loader
```

## [15.Source-Map配置](../webpack4.x讲义和代码/讲义/15.Source-Map配置.pdf)
[浅谈webpack devtool里的7种SourceMap模式](https://www.jb51.net/article/154583.htm)
1. Source-map 可以将编译、打包、压缩后的代码映射到源代码上；
2. 比如你打包或运行的代码是编译后的，报错后，它能指向你源代码的位置上；
```json
//会生成一个.map 文件
devtool: 'source-map', 
```
3. 根据不同的方式，有下面几种类型：
```
source-map          //打包后会生成一个对应的.map 文件
inline-source-map   //打包后会在 js 文件的内部最后生成 map 内容
eval-source-map     //打包后会在每个模块都执行 eval
hidden-source-map   //打包后会生成.map 文件但不会追踪原始文件的错误代码
cheap-source-map    //打包后会生成.map 并只能精确到行
```
PS：以上打包还可以合并比如 eval-cheap-source-map

PS：当然还有一些不在赘述，有兴趣自行搜索，太多。。。

4. 在开发环境和生产环境，我们该如何选择？开发要求速度快，调试方便推荐：
```
eval-source-map 或 eval-cheap-source-map  //开发环境
source-map                                //生产环境
```

### moudles
```
npm i -D webpack-dev-server webpack html-webpack-plugin mini-css-extract-plugin css-loader postcss-loader less-loader url-loader html-loader babel-loader @babel/preset-env @babel/plugin-proposal-class-properties optimize-css-assets-webpack-plugin sass sass-loader node-sass typescript ts-loader
```