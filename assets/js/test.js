/*
 * @Date        : 2020-04-01 21:48:05
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-04-23 17:49:56
 * @FilePath    : \html\assets\js\test.js
 * @Describe    :
 */

//document.getElementById("text").style.fontSize = "12px";
function key() {
    alert("hello anlzou.");
    //art();
}
function art() {
    var a = 6;
    // 结果"a不是1,2,3"
    1 == a ? console.log("a是1") : 2 == a ? console.log("a是2") : 3 == a ? console.log("a是3") : console.log("a不是1,2,3");
}


window.onload = function () {
    var button_add = document.getElementById("btn_add");
    var button_del = document.getElementById("btn_del");

    button_add.onclick = function click() {
        var para = document.createElement("p");
        var node = document.createTextNode("这是一个新段落。");
        para.appendChild(node);

        var element = document.getElementById("div1");
        var child = document.getElementById("p1");
        element.insertBefore(para, child);
    }
    button_del.onclick = function click() {
        var element = document.getElementById("div1");
        var node = document.getElementsByTagName("p");
        element.removeChild(node[0]);
    }
}