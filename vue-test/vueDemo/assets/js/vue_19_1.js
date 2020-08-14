/*
 * @Date        : 2020-08-14 11:25:54
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-08-14 12:02:28
 * @FilePath    : \web-test\vue-test\vueDemo\assets\js\vue_19_1.js
 * @Describe    : error
 */
var demo_1 = new Vue({
    el: '#main',
    data: {
        // 视图模型，可能的值是 "grid" 或 "list"。
        layout: 'grid',

        articles: [{
            "title": "HTML 教程",
            "url": "https://www.runoob.com/html/html-tutorial.html",
            "image": {
                "large": "https://static.runoob.com/images/mix/htmlbig.png",
                "small": "https://static.runoob.com/images/icon/html.png"
            }
        },
        {
            "title": "CSS 教程",
            "url": "https://www.runoob.com/css/css-tutorial.html",
            "image": {
                "large": "https://static.runoob.com/images/mix/cssbig.png",
                "small": "https://static.runoob.com/images/icon/css.png"
            }
        },
        {
            "title": "JS 教程",
            "url": "https://www.runoob.com/js/js-tutorial.html",
            "image": {
                "large": "https://static.runoob.com/images/mix/jsbig.jpeg",
                "small": "https://static.runoob.com/images/icon/js.png"
            }
        },
        {
            "title": "SQL  教程",
            "url": "https://www.runoob.com/sql/sql-tutorial.html",
            "image": {
                "large": "https://static.runoob.com/images/mix/sqlbig.png",
                "small": "https://static.runoob.com/images/icon/sql.png"
            }
        },
        {
            "title": "Ajax 教程",
            "url": "https://www.runoob.com/ajax/ajax-tutorial.html",
            "image": {
                "large": "https://static.runoob.com/images/mix/ajaxbig.png",
                "small": "https://static.runoob.com/images/icon/ajax.png"
            }
        },
        {
            "title": "Python 教程",
            "url": "https://www.runoob.com/python/python-tutorial.html",
            "image": {
                "large": "https://static.runoob.com/images/mix/pythonbig.png",
                "small": "https://static.runoob.com/images/icon/python.png"
            }
        }]

    }
});

// 部分导出
// export { demo_1 };

// 全部导出
export default { demo_1 }


// module.exports.demo_1 = demo_1;