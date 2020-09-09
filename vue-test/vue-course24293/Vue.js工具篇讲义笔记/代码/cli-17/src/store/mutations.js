export default {
    increment(state) {
        state.count++
    },
    setAge(state, payload) {
        state.age = payload.target.value
    },
    setInfo(state, value) {
        state.info = value
    },
    setName(state, value) {
        state.name = value
    }
}