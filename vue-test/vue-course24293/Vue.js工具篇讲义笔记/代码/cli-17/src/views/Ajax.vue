<template>
    <div class="ajax">
        <h3>姓名：{{name}}</h3>
        <button @click="getName">获取+</button>
    </div>
</template>

<script>
    //import axios from 'axios'

    import { get } from '@/http/api'

    export default {
        name: "Ajax",
        data() {
            return {
                name : ''
            }
        },
        methods : {
            getName() {


                get('/data.json').then(data => {
                    this.name = data[0].username
                    console.log(data)
                })

                // axios.get('/data.json').then(res => {
                //     this.name = res.data[0].username
                //     console.log(res.data)
                // })

                // axios.get('https://cdn.liyanhui.com/data.json').then(res => {
                //     this.name = res.data[0].username
                //     console.log(res.data)
                // })
            }
        }
    }
</script>

<style scoped>

</style>