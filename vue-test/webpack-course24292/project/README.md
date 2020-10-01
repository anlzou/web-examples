2. 我们可以创建 package.json 文件，来配置 scripts 属性来部署生成路径；
npm init -y //生成配置文件命令

3. 然后在 scripts 属性里添加子属性：build，属性值具体如下：
"build" : "webpack ./02/src/index.js -o ./02/dist/bundle.js
--mode=development" 

4. 然后使用 npm 命令自动执行这个属性值的路径；
npm run build