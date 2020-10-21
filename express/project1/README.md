<!--
 * @Date        : 2020-10-11 22:03:28
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-11 22:08:25
 * @FilePath    : \web-test\express\project1\myapp\README.md
 * @Describe    : 
-->
# [Express 应用程序生成器](https://www.expressjs.com.cn/starter/generator.html)

通过应用生成器工具 `express-generator` 可以快速创建一个应用的骨架。

你可以通过 `npx` （包含在 Node.js 8.2.0 及更高版本中）命令来运行 Express 应用程序生成器。
```
cd project_name_dir
$ npx express-generator
```

对于较老的 Node 版本，请通过 `npm` 将 `Express` 应用程序生成器安装到全局环境中并执行即可。
```
$ npm install -g express-generator
```

例如，如下命令创建了一个名称为 **myapp** 的 Express 应用。此应用将在当前目录下的 **myapp** 目录中创建，并且设置为使用 `Pug` 模板引擎（view engine）：
```
$ express --view=pug myapp
```

然后安装所有依赖包：
```
$ cd myapp
$ npm install
```

在 MacOS 或 Linux 中，通过如下命令启动此应用：
```
$ DEBUG=myapp:* npm start
```
在 Windows 中，通过如下命令启动此应用：
```
> set DEBUG=myapp:* & npm start
```
然后在浏览器中打开 `http://localhost:3000/` 网址就可以看到这个应用了。