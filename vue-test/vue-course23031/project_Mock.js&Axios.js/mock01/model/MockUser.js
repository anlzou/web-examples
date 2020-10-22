/*
 * @Date        : 2020-10-21 17:23:25
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-21 21:29:42
 * @FilePath    : \vue-course23031\project_Mock.js&Axios.js\demo01\model\MockUser.js
 * @Describe    : 为完成
 */

'use strict';

var mongoose = require('../../node_modules/mongoose')

const Schema = mongoose.Schema;

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

// var User = mongoose.model('user2', UserSchema);

exports.UserSchema = UserSchema
