const Mock = require('mockjs');

// console.log(Mock.Random.cname());
// console.log(Mock.mock('@cname'));



console.log(Mock.mock('@id'));
console.log(Mock.mock('@ctitle'));
console.log(Mock.mock('@ip'));
console.log(Mock.mock('@image'));
console.log(Mock.mock('@url'));

console.log(Mock.mock('@color'));
console.log(Mock.mock('@integer'));
console.log(Mock.mock('@datetime'));
console.log(Mock.mock('@string'));



//自行扩展占位符
Mock.Random.extend({
    cstore() {
        return this.pick([
            '宠物店',
            '美容店',
            '小吃店',
            '数码店',
            '快餐店'
        ]);
    }
});

console.log(Mock.mock('@cstore'));









