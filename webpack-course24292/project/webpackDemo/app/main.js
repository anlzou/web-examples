/*
 * @Date        : 2020-09-30 20:49:46
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-01 15:07:12
 * @FilePath    : \webpack-course24292\project\webpackDemo\app\main.js
 * @Describe    : 
 */
// const greeter = require('./app.js');
// document.querySelector("#root").appendChild(greeter());

import React from 'react';
import {render} from 'react-dom';
import App from './App'

// import 'style-loader!css-loader!./main.css'; // 使用require导入css文件
import './main.css'; // 使用require导入css文件


render(<App />, document.getElementById('root'));