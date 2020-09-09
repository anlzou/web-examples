export default {
    namespaced : true,

    state : {
        name : 'no name'
    },

    getters : {
        getName(state) {
          return '【' + state.name +'】'
        }
    },

    mutations: {
        setName(state, value) {
            state.name = value
        }
    },

    actions: {
        setName({commit}) {
            setTimeout(() => {
                commit('setName', 'Mr.Wang')
            }, 1000)
        }
    },
}