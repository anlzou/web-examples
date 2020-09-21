/*
 * @Date        : 2020-09-21 09:43:48
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-21 12:09:03
 * @FilePath    : \web-test\node.js\mongodb\test.js
 * @Describe    :
 */
/**mongoose：elegant mongodb object modeling for node.js
 * 中文官网：http://www.mongoosejs.net/
 * 本代码教程：https://www.cnblogs.com/chris-oil/p/9142795.html
 * 未完。。。
 * */

// 创建mongodb对象
const mongoose = require("mongoose")

//定义一个schema
var Schema = mongoose.Schema({
    category: String,
    name: String
});

const mongodb_url = "mongodb://localhost/mongoose"
// 链接mongodb数据库
mongoose.connect(mongodb_url)
    .then(() => {
        console.log("MongoDB connected....");
    })
    .catch(err => {
        console.log(err);
    });

insertData = (insert_data) => {
    // 创建链接对象
    const con = mongoose.connection;
    con.on('error', console.error.bind(console, '连接数据库失败'));

    con.once('open', () => {
        Schema.methods.eat = function () {
            console.log("I've eatten one " + this.name);
        }

        //继承一个schema
        let Model = mongoose.model("fruit", Schema);

        let insert_ = new Model(insert_data);

        //存放数据
        insert_.save((err, insert_) => {
            if (err) return console.log(err);
            insert_.eat();
            //查找数据
            Model.find((err, data) => {
                console.log(data);
            })
        });
    })
}

selectData = () => {
    const conn = mongoose.connection;
    conn.on('error', console.error.bind(console, '连接数据库失败'));

    conn.once('open', () => {
        // 创建集合模型
        let Model = mongoose.model('fruit', Schema);

        Model.find((err, data) => {
            console.log(data);
        });
    });

}

//生成一个document
let insert_data = {
    category: 'B_tab',
    name: 'balabala'
}
// insertData(insert_data);

selectData();