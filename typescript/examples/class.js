/*
 * @Date        : 2020-09-23 14:46:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-24 09:23:04
 * @FilePath    : \demo\typescript\class.js
 * @Describe    : 
 */
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return {
        x: x,
        y: y
    };
}
// 正确
var newPoint = addPoints({
    x: 3,
    y: 4
}, {
    x: 5,
    y: 1
});
console.log(newPoint)