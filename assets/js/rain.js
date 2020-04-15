/*
 * @Date        : 2020-03-28 22:49:35
 * @LastEditors : anlzou
 * @LastEditTime: 2020-03-28 22:49:43
 * @FilePath    : \html\js\rain.js
 * @describe    :
 */

let content = document.getElementById("content");
let num = 0;
//雨滴的分布
for (let i = 0; i < 30; i++) {
    let lefts = Math.floor(Math.random() * 5 + 2);
    let delay = Math.floor(Math.random() * 5 + 2);
    num += lefts;
    let div = document.createElement("div");
    div.setAttribute("class", "raindrop");
    let sty = document.getElementsByClassName("raindrop");
    sty[i].style.left = `${num}%`;
    sty[i].style.top = `${lefts}%`;
    //延迟时间
    sty[i].style.animationDelay = `${delay / 10}s`;
    content.appendChild(div);
}