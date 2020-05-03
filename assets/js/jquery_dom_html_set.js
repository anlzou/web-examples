

/*
 * @Date        : 2020-05-03 10:59:11
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-05-03 11:00:13
 * @FilePath    : \Web_Test\assets\js\jquery_dom_html_set.js
 * @Describe    : 
 */
$(document).ready(function () {
  $("#btn1").click(function () {
    var va = $("#test3").val();
    $("#test1").text(va);
  });
  $("#btn2").click(function () {
    var va = $("#test3").val();
    $("#test2").html(va);
  });
  $("#btn3").click(function () {
    $("#test3").val("");
  });
});