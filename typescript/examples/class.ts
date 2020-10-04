/*
 * @Date        : 2020-09-23 14:46:10
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-24 09:22:30
 * @FilePath    : \demo\typescript\class.ts
 * @Describe    : 
 */
interface IPoint {
    x: number
    y: number
}
function addPoints(p1: IPoint, p2: IPoint): IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return { x: x, y: y }
}

// 正确
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 }) 