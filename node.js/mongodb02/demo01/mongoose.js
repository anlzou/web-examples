/*
 * @Date        : 2020-10-21 10:43:41
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 12:44:16
 * @FilePath    : \mongodb02\demo01\mongoose.js
 * @Describe    : 
 */

/**
 * mongodb是最原始的驱动mongoose，是基bai于mongodb的du封装，mongoose更节省代zhi码量，
 * mongodb支持原生的mongo数据库的命令写法和最新dao的语法Mongoose只不1653过是封装了MongoDB的操作的一个对象模型库
 * */  
var mongoose = require('mongoose');

var options = {
    db_user: "admin",//添加的普通账户名
    db_pwd: "123456",
    db_host: "120.25.249.101",
    db_port: 27017,
    db_name: "test",//数据库名称
    useNewUrlParser: true
};

var dbURL = "mongodb://" + options.db_user + ":" + options.db_pwd + "@" + options.db_host + ":" + options.db_port + "/" + options.db_name+"?authSource=admin";
mongoose.connect(dbURL);// 连接数据库

var Schema = mongoose.Schema
// // model1
// var userSchema = new Schema({
//     username:{
//         type:String,
//         required:true //必须有
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String
//     }
// })

// var User = mongoose.model('users', userSchema);

// var admin = new User({
// 	username:'admin',
// 	password:'123456',
// 	email:'admin@admin.com'
// })

// admin.save(function(err, result){
//     if(err) console.log('unok')
//     console.log('ok')
// })

// --end model

// // 得到数据库连接句柄
// let dbHandle = mongoose.connection;

// //通过 数据库连接句柄，监听mongoose数据库成功的事件
// dbHandle.on('open', function (err) {
//     if (err) {
//         console.log('数据库连接失败');
//         throw err;
//     }
//     console.log('数据库连接成功')

//     admin.save(function(err,ret){
//         if(err){
//             console.log('保存失败')
//         } else {
//             console.log('保存成功')
            
//             console.log(ret)
//         }
//     })
// })

// dbHandle.close(function(err){
//     if (err) throw err;
//     console.log("关闭数据库")
// })

//2.设计文档结构
var carSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

//3.将文档结构发布为模型
var Car = mongoose.model('car', carSchema);

//4.增加数据
var newCar = new Car({
    name: '兰博基尼',
    price: '450w',
    color: 'yellow'
});

// 保存数据
// newCar.save(function (err, result) {
//     if (err) {
//         console.log('保存失败');
//     } else {
//         console.log('保存成功');
//     }
// });


//5.查询数据
// Car.find(function (err, result) {
//     if (err) {
//         console.log('查询失败');
//     } else {
//         console.log(result);
//     }
// });

//or(或者用findOne方法)

Car.findOne(function (err, result) {
    if (err) {
        console.log('查询失败');
    } else {
        console.log(result);
    }
});


//6.删除数据
// Car.deleteOne({name: '兰博基尼'}, function (err) {
//     if (err) {
//         console.log('未删除');
//     } else {
//         console.log('已经删除');
//     }
// });


//7.更新数据
// Car.findByIdAndUpdate(id,{price: '450w'},function (err,result) {
//     if (err) {
//         console.log('更新失败');
//     } else {
//         console.log('更新成功');
//     }
// });

//or(或者用updateOne方法)

// Car.updateOne({ name: '兰博基尼' }, { color: 'yellow',price:'450w' }, function(err, res) {
//     if (err) {
//         console.log('更新失败');
//     } else {
//         console.log('更新成功');
//     }
// });