<template>
    <!--主体-->
    <ul class="list">
        <li v-for="(item, index) in list">
            <router-link :to="{path : '/details/' + item.e_id}">
                {{index + 1}}. {{item.title}}
                <em>{{item.date.split('年')[0]}}年</em>
            </router-link>
        </li>
    </ul>
</template>

<script>
    //引入axios
    import {get} from '@/http/api.js'

    export default {
        name: "List",

        //数据
        data() {
            return {
                key  : '243efaea5d339c10c544fa3c459a88c1',
                list : []
            }
        },

        props : {
            today : String
        },


        //初始化完成
        mounted() {
            //异步API
            this.getList()
        },

        //方法
        methods : {
            //获取异步API
            getList() {
                get('/queryEvent.php?key=' + this.key + '&date=' + this.today).then(data => {
                    //判断加载正确
                    if (data.error_code === 0) {
                        this.list = data.result
                    }
                })
            },
        },

        //监听
        watch : {
            today(val) {
                this.getList()
            }
        }

    }
</script>

<style scoped>
    .list {
        list-style-type: none;
        margin: 40px 0;
        padding: 0;
    }
    .list li {
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }
    .list li a{
        text-decoration: none;
        color: #666;
        display: block;
        padding: 10px;
    }
    .list li a:hover {
        background-color: #333;
        color: white;
    }
    .list li a em {
        float: right;
        font-style: normal;
        padding-right: 5px;
    }
</style>