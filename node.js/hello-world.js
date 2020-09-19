/*
 * @Date        : 2020-09-12 19:45:26
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-12 19:58:10
 * @FilePath    : \web-test\node.js\hello-world.js
 * @Describe    : 
 */
const http = require('http')

const hostname = "127.0.0.1"
const port = 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello anlzou\n')
})

server.listen(port, hostname, () => {
    console.log(`server is running on http://${hostname}:${port}`)
})

console.log('node serve test.')