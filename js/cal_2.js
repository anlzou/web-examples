/*
 * @Date        : 2020-03-30 10:43:50
 * @LastEditors : anlzou
 * @LastEditTime: 2020-03-30 11:00:59
 * @FilePath    : \html\js\cal_2.js
 * @describe    :
 */
/* limpa o display */
function cls() {
    document.getElementById("display").value = "";
}

/* recebe os valores */
function get(value) {
    document.getElementById("display").value += value;
}

/* calcula */
function calculates() {
    var result = 0;
    result = document.getElementById("display").value;
    document.getElementById("display").value = "";
    document.getElementById("display").value = eval(result);
};
