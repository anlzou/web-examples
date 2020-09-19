/*
 * @Date        : 2020-09-19 16:30:15
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-19 17:02:50
 * @FilePath    : \web-test\js\async&await\test1.js
 * @Describe    :
 */
/**用 async/await 来处理异步
 * https://www.cnblogs.com/yuanyingke/p/10280681.html
*/
/**async 关键字
 * async的用法，它作为一个关键字放到函数前面，用于表示函数是一个异步函数，
 * 因为async就是异步的意思， 异步函数也就意味着该函数的执行不会阻塞后面代码的执行。
 * then(): 当.then()前的方法执行完后再执行then()内部的程序。
*/
asyncTest1 = () => {
    async function timeout() {
        return 'hello world';
    }
    timeout().then((result) => {
        console.log(result);
    });
    console.log('虽然在后面，但是我先执行');
}
// asyncTest1();


function asyncTest2() {
    async function timeout(flag) {
        if (flag) {
            return 'hello world'
        } else {
            throw 'my god, failure'
        }
    }
    // console.log(timeout(true))  // 调用Promise.resolve() 返回promise 对象。
    // console.log(timeout(false)); // 调用Promise.reject() 返回promise 对象。

    timeout(true).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
}
// asyncTest2();


/**await 关键字
 * await是等待的意思，那么它等待什么呢，它后面跟着什么呢？
 * 其实它后面可以放任何表达式，不过我们更多的是放一个返回promise 对象的表达式。
 * 注意await 关键字只能放到async 函数里面。
*/
awaitTest1 = (num) => {
    // 2s 之后返回双倍的值
    function doubleAfter2seconds(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2 * num)
            }, 1000);
        })
    }

    async function testResult(num) {
        let result = await doubleAfter2seconds(num);
        console.log(result);
    }

    testResult(num);
}
awaitTest1(30);