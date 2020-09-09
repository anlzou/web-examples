export default {
    // getGender(state) {
    //   return '【' + state.gender +'】'
    // }

    getGender : (state) => (id) =>  {
        return '【' + state.gender + ',' + id +'】'
    },
    //
    // getGender(state) {
    //   return function (id) {
    //     return '【' + state.gender + ',' + id +'】'
    //   }
    // }

}