/*
 * @Date        : 2020-09-23 14:22:53
 * @LastEditors : anlzou
 * @Github      : https://github.com/anlzou
 * @LastEditTime: 2020-09-23 23:54:51
 * @FilePath    : \demo\typescript\hello.ts
 * @Describe    : 
 */
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

