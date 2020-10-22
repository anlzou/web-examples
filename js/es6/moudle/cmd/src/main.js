/*
 * @Date        : 2020-10-22 10:50:32
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-10-22 11:40:55
 * @FilePath    : \js\es6\moudle\cmd\src\main.js
 * @Describe    : 
 */
define(function (require) {
    let module1 = require('./modules/module1')
    let module4 = require('./modules/module4')
    let module2 = require('./modules/module2')
    let module3 = require('./modules/module3')

    module1.show()
    module4.show()

    let msg2 = module2.msg;
    console.log(msg2)
    let msg3 = module3.MOUDLE3_MSG;
    console.log(msg3)

});