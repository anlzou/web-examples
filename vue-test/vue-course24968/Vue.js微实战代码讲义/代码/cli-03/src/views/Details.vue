<template>
    <section class="main">
        <div class="item">
            <h3>{{title}}</h3>
            <img v-show="flag" :src="url" :alt="pic_title">
            <p>{{content}}</p>
            <button @click="go(-1)">返回</button>
        </div>
    </section>
</template>

<script>
    //引入axios
    import {get} from '@/http/api.js'

    export default {
        name: "Details",

        //数据
        data() {
            return {
                key : '243efaea5d339c10c544fa3c459a88c1',
                id  : this.$route.params.id,

                title : '',
                content : '',

                flag : false,
                url  : '',
                pic_title : ''
            }
        },

        //测试
        created() {
            //console.log(this.$route.params.id)
        },

        //异步
        mounted() {
            this.getSingle()
        },

        //方法
        methods : {
            //获取单一数据
            getSingle() {
                get('/queryDetail.php?key=' + this.key + '&e_id=' + this.id).then(data => {
                    if (data.error_code === 0) {

                        const result = data.result[0]

                        //内容
                        this.title   = result.title
                        this.content = result.content

                        //图片
                        if (result.picNo > 0) {
                            this.flag       = true
                            this.url        = result.picUrl[0].url
                            this.pic_title  = result.picUrl[0].pic_title
                        }


                    }
                })
            },

            //返回
            go(step) {
                this.$router.go(step)
            }
        }
    }
</script>

<style scoped>
    .main {
        color: #333;
    }
    .main div.item {
        padding: 20px;
        line-height: 150%;
    }
    .main img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
    }
</style>