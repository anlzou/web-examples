<!--
 * @Date        : 2020-10-01 23:25:27
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-02 09:20:57
 * @FilePath    : \webpack-course24292\webpack4.x讲义和代码\README.md
 * @Describe    : 
-->
## loader

### [02.模块打包和配置](../webpack4.x讲义和代码/讲义/02.模块打包和配置.pdf)
- webpack


### [03.DevServer服务](../webpack4.x讲义和代码/讲义/03.DevServer服务.pdf)
- webpack-dev-server

### [04.Plugin部署Html 插件](../webpack4.x讲义和代码/讲义/04.Plugin部署Html插件.pdf)
- html-webpack-dev-server

### [05.Loader打包CSS文件](../webpack4.x讲义和代码/讲义/05.Loader打包CSS文件.pdf)
1. css-loader：读取和编译 css 文件，转换为样式字符模块；
2. .style-loader：将 css 插入到 JavaScript 中；
3. .less-loader：读取和编译 less 预处理样式，转换为 css 文件；

### [06.Loader打包图片文件](../webpack4.x讲义和代码/讲义/06.Loader打包图片文件.pdf)
1. file-loader：解析 JavaScipt 和 css 插入的图片；
2. url-loader：将图片转换为 base64 编码字符串；
3. html-loader：将.html 进行打包，从而解析 img 插入问题；

### [07.分离CSS分类打包](../webpack4.x讲义和代码/讲义/07.分离CSS.分类打包.pdf)
- mini-css-extract-plugin

### [08.PostCss兼容性转换](../webpack4.x讲义和代码/讲义/08.PostCss兼容性转换.pdf)
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