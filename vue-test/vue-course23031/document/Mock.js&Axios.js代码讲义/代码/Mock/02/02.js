const Mock = require('mockjs');

const obj = {
    name : 'Mr.Lee',
    age : 100,
    gender : '男'
};

const arr = ['a', 'b', 'c', 'd'];

const data = Mock.mock({
    'list|1-10': [{
        //'id|+1': 1
        //'id|1-10.1-3' : 1
        //'flag|1' : true
        //'obj|1-3' : obj
        //'arr|1-2' : arr
        // 'fn' : function () {
        //     return 'fn';
        // }
        //'reg' : /[a-z]/
        cname : '@cname',
        city : '@city',
        full : '@cname -- @city'
    }]
});

console.log(data);
console.log(JSON.stringify(data, null, 4));
