/*
 * @Date        : 2020-10-21 12:48:34
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-28 08:54:22
 * @FilePath    : \web-test\node.js\mysql\demo01\mysql.js
 * @Describe    : 
 */
/**
 * more:https://www.runoob.com/nodejs/nodejs-mysql.html
 */
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'xxx',
  user: 'xxx',
  password: 'xxx',
  database: 'test'
});

connection.connect();

var sql = 'SELECT * FROM websites where id=2';
//查
connection.query(sql, function (err, result) {
  if (err) {
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }

  console.log('--------------------------SELECT----------------------------');
  console.log(result);
  console.log('------------------------------------------------------------\n\n');
});

connection.end();