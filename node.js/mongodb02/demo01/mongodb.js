/*
 * @Date        : 2020-10-21 10:20:14
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-28 08:55:22
 * @FilePath    : \web-test\node.js\mongodb02\demo01\mongodb.js
 * @Describe    : 
 */
var MongoClient = require('mongodb').MongoClient;
var options = {
    db_user: "xxx",//添加的普通账户名
    db_pwd: "xxx",
    db_host: "xxx",
    db_port: 27017,
    db_name: "test",//数据库名称
    useNewUrlParser: true
};
var dbURL = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name + "?authSource=admin";

// 通过将useNewUrlParser设置为true来避免“不建议使用当前URL字符串解析器”警告
MongoClient.connect(dbURL, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("连接数据库");

    // 绑定数据库
    var dbbase = db.db('test')
    var myobj = [
        {
            _id: 100,
            title: 'MongoDB Overview',
            description: 'MongoDB is no sql database',
            by_user: 'Maxsu',
            url: 'http://www.yiibai.com',
            tags: ['mongodb', 'database', 'NoSQL'],
            likes: 100
        },
        {
            _id: 101,
            title: 'NoSQL Overview',
            description: 'No sql database is very fast',
            by_user: 'Maxsu',
            url: 'http://www.yiibai.com',
            tags: ['mongodb', 'database', 'NoSQL'],
            likes: 10
        },
        {
            _id: 102,
            title: 'Neo4j Overview',
            description: 'Neo4j is no sql database',
            by_user: 'Kuber',
            url: 'http://www.neo4j.com',
            tags: ['neo4j', 'database', 'NoSQL'],
            likes: 750
        },
        {
            _id: 103,
            title: 'MySQL Overview',
            description: 'MySQL is sql database',
            by_user: 'Curry',
            url: 'http://www.yiibai.com/mysql/',
            tags: ['MySQL', 'database', 'SQL'],
            likes: 350
        }]
    // 创建集合
    // dbbase.createCollection('article',function(err,res){
    //     if(err) throw err;
    //     console.log('集合创建完成！');
    // })

    // 插入数据
    // dbbase.collection('article').insertMany(myobj,function(err,res){
    //     if(err) throw err;
    //     console.log('插入成功');
    // })

    // 查询数据
    dbbase.collection('article').find({}).toArray(function (err, result) {
        console.log(result);
    })

    // 关闭数据库
    db.close(function (err, result) {
        console.log('关闭数据库');
    });
})