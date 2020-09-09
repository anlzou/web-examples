export default {
    //ES6解构语法
    setInfo({commit}) {
        //模拟异步延迟
        setTimeout(() => {
            commit('setInfo', '异步信息')
        }, 1000)
    },
    setName({commit}) {
        setTimeout(() => {
            commit('setName', 'Mr.Wang')
        }, 1000)
    }
}