/*
 * @Date        : 2020-09-19 18:53:13
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-19 19:24:46
 * @FilePath    : \web-test\js\async&await\prepaid-refill\server.js
 * @Describe    : 
 */
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// 电话号码返回省和市，为了模拟延迟，使用了setTimeout
app.post('/phoneLocation', (req, res) => {
    setTimeout(() => {
        res.json({
            success: true,
            obj: {
                province: '广东',
                city: '深圳'
            }
        })
    }, 1000);
})

// 返回面值列表
app.post('/faceList', (req, res) => {
    setTimeout(() => {
        res.json(
            {
                success: true,
                obj: ['20元', '30元', '50元']
            }

        )
    }, 1000);
})

app.listen(port, () => {
    console.log(`server is started in http://localhost:${port}`);
})