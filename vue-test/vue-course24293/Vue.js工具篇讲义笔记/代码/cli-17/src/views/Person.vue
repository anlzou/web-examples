<template>
    <div class="person">
        <ul>
            <li>姓名：{{name}}</li>
            <li>性别：{{gender}} || {{getGender(2)}}</li>
            <li>年龄：{{age}}</li>
        </ul>
        <input type="text" @input="setAge" :value="age"> {{test}}
    </div>
</template>

<script>
    import { mapState,mapGetters,mapMutations } from 'vuex'

    export default {
        name: "Person",
        data() {
            return {
                count : 10
            }
        },

        //数组方法
        //computed : mapState(['name', 'gender', 'age']),

        //对象方式
        computed : {
            test() {
                return 'test'
            },
            // getGender() {
            //     return this.$store.getters.getGender
            // },

            ...mapGetters(['getGender']),
            ...mapState({
                name : state => state.name,
                gender : 'gender',
                age(state) {
                    //return state.age + this.count
                    return state.age
                }
            }),
        },

        //方法
        methods : {
            // setAge(e) {
            //     this.$store.commit('setAge', e)
            // }
            ...mapMutations(['setAge'])
        }

        // computed : {
        //     name() {
        //         return this.$store.state.name
        //     },
        //     gender() {
        //         return this.$store.state.gender
        //     },
        //     age : {
        //         get() {
        //             return this.$store.state.age
        //         },
        //         set(value) {
        //             this.$store.commit('setAge', value)
        //         }
        //     },
        // }



    }
</script>

<style scoped>

</style>