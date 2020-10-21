/*
 * @Date        : 2020-10-21 17:10:00
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 21:47:44
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\demo01\mongodb\mongoose.js
 * @Describe    : 
 */
var mongoose = require('mongoose')
// var UserSchema = require('../model/MockUser')
var getData = require('../test02')

var options = {
    db_user: "xxx",//添加的普通账户名
    db_pwd: "xxx",
    db_host: "xxx",
    db_port: 27017,
    db_name: "test",//数据库名称
    useNewUrlParser: true
};

var dbURL = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name+"?authSource=admin";
mongoose.connect(dbURL)
var Schema = mongoose.Schema;

var data = JSON.stringify(getData, null, 4);
var obj = JSON.parse(data)
// console.log(obj.getData.list[2])

// 数据库连接句柄
let dbHandle = mongoose.connection;

//通过数据库连接句柄，监听mongoose数据库成功的事件
dbHandle.on('open', function (err) {
    if (err) {
        console.log('数据库连接失败');
        throw err;
    }
    console.log('数据库连接成功')
})

const UserSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    score:{
        type:Number,
        required:true
    }
})

//将文档结构发布为模型
var User = mongoose.model('user2', UserSchema);

// 插入数据
// for(let i in obj.getData.list){
//     var user = new User(obj.getData.list[i])

//     // 保存数据
//     user.save(function (err, result) {
//         if (err) {
//             console.log('保存失败');
//         } else {
//             console.log(''+i+'保存成功');
//         }
//     });
// }

// 更新数据
// User.updateOne({ name: '龙涛' }, { name: 'anlzou',score:'100.999' }, function(err, res) {
//     if (err) {
//         console.log('更新失败');
//     } else {
//         console.log('更新成功');
//     }
// });

//查询数据
User.find({"id":99},function (err, result) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(result);
    }
});