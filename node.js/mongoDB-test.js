/*
 * @Date        : 2020-09-19 09:15:24
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-19 11:00:06
 * @FilePath    : \node.js\mongoDB-test.js
 * @Describe    : 
 */
/**创建数据库
 * 1.创建一个 MongoClient 对象
 * 2.配置指定的 URL 和 端口号
 * 如果数据库不存在，MongoDB 将创建数据库并建立连接
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/node_js_test';

/**连接数据库
 * useNewUrlParser->https://blog.csdn.net/weixin_44796493/article/details/104552921?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~first_rank_v2~rank_v25-1-104552921.nonecase&utm_term=usenewurlparser%E4%BD%9C%E7%94%A8
 */
function funConnectDataBase() {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        console.log('数据库连接成功');
        db.close();
    });
}
// funConnectDataBase();



/**创建集合
 * createCollection() 方法：创建集合（集合相当于关系数据库的表）
 * collection1: 数据库名称
 * site: 集合名称
 */
function funCreateCollection(name) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        console.log('数据库连接成功');

        var dbase = db.db('collection1');
        dbase.createCollection(name, function (err, res) {
            if (err) throw err;
            console.log('集合创建成功');
            db.close();
        });
    });
}
// funCreateCollection('-name-');



/**数据库操作( CURD )
 * 与 MySQL 不同的是 MongoDB 会自动创建数据库和集合，所以使用前不需要手动去创建
*/
/**插入数据
 * 插入一条数据条数据，使用 insertOne()
*/
function funInsertOne(myobj) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        console.log('数据库连接成功');

        var dbo = db.db('collection1');

        dbo.collection('site').insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log('单条信息插入成功');
            db.close();
        });
    });
}
// var myobj = { name: 'anlzou1', blog: 'www.anlzou1.com', age: 20 };
// funInsertOne(myobj);


/**插入数据
 * 插入多条数据可以使用 insertMany()
 * insertedCount: 插入的条数
*/
function funInsertMany(myobj2) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        console.log('数据库连接成功');
        // test code
        var dbo = db.db('collection1');
        dbo.collection('site').insertMany(myobj2, function (err, res) {
            if (err) throw err;
            console.log('多条信息插入成功' + '数量为：' + res.insertedCount);
            db.close();
        });
    });
}
// var myobj2 = [
//     { name: 'baidu1', url: 'https://baidu1.com', type: 'cn' },
//     { name: 'Google1', url: 'https://www.google1.com', type: 'en' }
// ];
// funInsertMany(myobj2);



/**查询数据
 * 使用 find() 来查找数据, find() 可以返回匹配条件的所有数据。
 * 如果未指定条件，find() 返回集合中的所有数据。
*/
function funFindData(findKey) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db('collection1');

        if (findKey != undefined) {
            // 根据key查询
            dbo.collection('site').find(findKey).toArray(function (err, result) { // 返回集合中所有数据
                if (err) throw err;
                console.log('---- find by key: ' + findKey.name + ' ----');
                console.log(result);
                db.close();
            });
        } else {
            // 查询所有数据
            dbo.collection('site').find({}).toArray(function (err, result) { // 返回集合中所有数据
                if (err) throw err;
                console.log('---- find all data ----');
                console.log(result);
                db.close();
            });
        }
    });
}
//find by key
// var findKey = { name: 'baidu' };
// funFindData(findKey);

//find all data
// funFindData();



/**更新数据
 * 更新一条数据使用 updateOne()
 * 更新所有符合条的文档数据可以使用 updateMany()
 * result.nModified: 更新的条数
*/
function funUpdateData(isAll, updateKey, updateStr) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db('collection1');

        if (isAll === 1) {
            //更新多条数据
            dbo.collection('site').updateMany(updateKey, updateStr, function (err, res) {
                if (err) throw err;
                console.log("文档更新成功，" + "更新了" + res.result.nModified + "条数据");
                db.close();
            });
        } else {
            //更新一条数据
            dbo.collection('site').updateOne(updateKey, updateStr, function (err, res) {
                if (err) throw err;
                console.log("文档更新成功");
                db.close();
            });
        }
    });
}
// var updateKey = { name: 'anlzou' };
// var updateStr = { $set: { 'age': 19 } };
// 1为更新所有包含key的数据，非1为更新第一条数据
// funUpdateData(1, updateKey, updateStr);
//查询数据
// funFindData(updateKey);



/**删除数据
 * deleteOne: 删除一条
 * deleteMany: 删除多条
*/
function funDeleteData(isAll, deleteKey) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("collection1");

        if (isAll === 1) {
            dbo.collection('site').deleteMany(deleteKey, function (err, obj) {
                if (err) throw err;
                console.log("文档删除成功，删除了" + obj.result.n + '条数据');
                db.close();
            });
        } else {
            dbo.collection('site').deleteOne(deleteKey, function (err, obj) {
                if (err) throw err;
                console.log("文档删除成功");
                db.close();
            })
        }

    });
}
// var deleteKey = { name: 'baidu' };
// funDeleteData(1, deleteKey);
// funFindData(deleteKey);