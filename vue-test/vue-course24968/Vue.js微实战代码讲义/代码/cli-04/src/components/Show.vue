<template>
    <!--表格-->
    <table class="table">
        <thead>
        <tr>
            <th colspan="2">查询结果</th>
        </tr>
        </thead>

        <tbody v-show="!flag">
        <tr>
            <td colspan="2" style="color:red;">{{error}}</td>
        </tr>
        </tbody>

        <tbody v-show="flag">
        <tr>
            <td class="left">手机号码段：</td>
            <td class="right">{{tel}}</td>
        </tr>
        <tr class="gray">
            <td class="left">卡号归属地：</td>
            <td class="right">{{obj.province}}省{{obj.city}}市</td>
        </tr>
        <tr>
            <td class="left">运营商：</td>
            <td class="right">{{obj.company}}</td>
        </tr>
        <tr class="gray">
            <td class="left">区号：</td>
            <td class="right">{{obj.areacode}}</td>
        </tr>
        <tr>
            <td class="left">邮编：</td>
            <td class="right">{{obj.zip}}</td>
        </tr>
        <tr class="gray">
            <td colspan="2">号码归属地数据由聚合数据提供</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    //引入axios
    import {get} from '@/http/api.js'

    export default {
        name: "Show",

        //数据
        data() {
            return {
                key : '72dc10d8150628c15520e45ce9a8f964',

                //对象初始
                obj : {
                    zip : '',
                    province : '',
                    company : '',
                    city : '',
                    areacode : '',
                },

                //错误
                error : '',

                //
                flag : false
            }
        },

        //props
        props : {
            tel : String
        },

        //方法
        methods : {
            //获取API
            getData() {
                get('/get?phone=' + this.tel + '&key=' + this.key).then(data => {
                    // if (data.error_code === 0) {
                    //     this.obj = data.result
                    // }

                    switch (data.error_code) {
                        case 201101 :
                            this.error = '手机号码不可以为空~'
                            this.flag  = false
                            break
                        case 201102 :
                            this.error = '手机号码是错误的~'
                            this.flag  = false
                            break
                        case 201103 :
                            this.error = '查不到这个手机号码~'
                            this.flag  = false
                            break
                        case 0 :
                            this.obj   = data.result
                            this.flag  = true
                            break
                    }
                })
            }
        },


        //监听
        watch : {
            tel(val) {
                this.getData()
            }
        }
    }
</script>

<style scoped>
    .table {
        width: 95%;
        margin: 10px;
        text-align: center;
        font-size: 14px;
        color: #666;
    }
    .table tr.gray {
        background-color: #eee;
    }
    .table th {
        height: 35px;
        line-height: 35px;
        color: #444;
        background-color: #eee;
    }
    .table td {
        height: 35px;
        line-height: 35px;
    }
    .table td.left {
        width: 35%;
        text-align: right;
        padding-right: 5px;
    }
    .table td.right {
        width: 65%;
        text-align: left;
        padding-left: 5px;
    }
</style>