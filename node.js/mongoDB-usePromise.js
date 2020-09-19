/*
 * @Date        : 2020-09-19 15:00:11
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-19 19:55:59
 * @FilePath    : \node.js\mongoDB-usePromise.js
 * @Describe    : 异步编程、Promise类
 */
/**使用 Promise
 * Promise 是一个 ECMAScript 6 提供的类，目的是更加优雅地书写复杂的异步任务。
 * 如果你还不了解 Promise，可以参考 https://www.runoob.com/js/js-promise.html。
 * 1.使用 Promise 创建集合
*/
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/node_js_test';

funCreateCollection_promise = (collection_name) => {
    MongoClient.connect(url, { useNewUrlParser: true }).then((conn) => {
        console.log('数据库已经连接');
        var dbo = conn.db('collection1');
        dbo.createCollection(collection_name).then((res) => {
            console.log('创建集合 “' + collection_name + '” 成功');
        }).catch((err) => {
            console.log('集合创建失败');
        }).finally(() => {
            conn.close();
        });
    }).catch((err) => {
        console.log('数据库连接失败');
    });
}
// funCreateCollection_promise('site2');



/**Promise 数据操作
 * 在一个程序中实现四个连续操作：增加 、查询 、更改 、删除。
*/
funOperation_usePromise = (collection_name) => {
    MongoClient.connect(url, { useNewUrlParser: true }).then((conn) => {
        console.log("数据库已连接");
        const test = conn.db('collection1').collection(collection_name);

        //增加
        var insert_data = [
            { "site": 'baidu.com', 'name': 'baidu' },
            { "site": 'alibaba.com', 'name': 'alibaba' }
        ];
        test.insertMany(insert_data).then((res) => {
            // 查询
            return test.find().toArray().then((arr) => {
                console.log('----insert data----');
                console.log(arr);
            });
        }).then(() => {
            // 更改
            var update_key = { "name": 'baidu' };
            var update_date = { $set: { 'site': 'www.baidu.com' } };
            return test.updateMany(update_key, update_date);
        }).then((res) => {
            // 查询
            return test.find().toArray().then((arr) => {
                console.log('----update data----');
                console.log(arr);
            });
        }).then(() => {
            // 删除
            var delete_key = { 'site': 'alibaba.com' };
            return test.deleteMany(delete_key);
        }).then((res) => {
            // 查询
            return test.find().toArray().then((arr) => {
                console.log('----delete date----');
                console.log(arr);
            });
        }).catch((err) => {
            console.log("数据库操作失败" + err.message);
        }).finally(() => {
            conn.close();
        });
    }).catch((err) => {
        console.log('数据库连接失败');
    });
}
// funOperation_usePromise('site2');



/**用异步函数实现相同的数据操作
 * 1.async
 * 2.await
*/
async function funOperation_async() {
    var conn = null;
    try {
        conn = await MongoClient.connect(url);
        console.log('数据库已经连接');
        const test = conn.db('collection1').collection('site2');

        //增加
        var insert_data = { "site": "google.com", "name": "google" };
        await test.insertOne(insert_data);
        //查询
        var arr = await test.find().toArray();
        console.log('----insert data----');
        console.log(arr);

        //更改
        var update_key = { "name": 'google' };
        var update_date = { $set: { "site": "www.google.com" } };
        await test.updateMany(update_key, update_date);
        // 查询
        arr = await test.find().toArray();
        console.log('----update data----');
        console.log(arr);

        //删除
        var delete_key = { "name": "baidu" }
        await test.deleteMany(delete_key);
        //查询
        var arr = await test.find().toArray();
        console.log('----delete data----');
        console.log(arr);
    } catch (err) {
        console.log("错误：" + err.message);
    } finally {
        if (conn != null) conn.close();
    }
}
funOperation_async();