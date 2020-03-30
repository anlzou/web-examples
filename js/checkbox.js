/*
 * @CreateDate  : 2020-03-30
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-03-30 15:10:36
 * @FilePath    : \html\js\checkobx.js
 * @Describe    : 多选框(选择)：全选、取消全选、反选、全选/取消
 */
// 全选
function checkboxed(objName) {
    var objNameList = document.getElementsByName(objName);

    if (null != objNameList) {
        for (var i = 0; i < objNameList.length; i++) {
            objNameList[i].checked = "checked";
        }
    }
}

// 取消全选
function unCheckboxed(objName) {
    var objNameList = document.getElementsByName(objName);

    if (null != objNameList) {
        for (var i = 0; i < objNameList.length; i++) {
            objNameList[i].checked = "";
        }
    }
}

// 反选
function otherCheckboxed(objName) {
    var objNameList = document.getElementsByName(objName);

    if (null != objNameList) {
        for (var i = 0; i < objNameList.length; i++) {
            if (objNameList[i].checked == "") {
                objNameList[i].checked = "checked";
            } else {
                objNameList[i].checked = "";
            }
        }
    }
}

// 全选/取消
var checkAll = false;
function allcheck() {
    checkAll = !checkAll;
    let inputs = document.getElementsByName('checkbox')
    for (var i = 0; i < inputs.length; i++) { inputs[i].checked = checkAll }
}

// 代码优化
/*
function opcheckboxed(objName, type){
  var objNameList=document.getElementsByName(objName);
  if(null!=objNameList){
    for(var i=0;i<objNameList.length;i++){
      if(objNameList[i].checked==true)
      {
        if(type != 'checkall') {  // 非全选
          objNameList[i].checked=false;
        }

      } else {
        if(type != 'uncheckall') {  // 非取消全选
          objNameList[i].checked=true;
        }
      }
    }
  }
}
 */