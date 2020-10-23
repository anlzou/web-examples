<template>
    <!--搜索-->
    <div class="search">
        <input type="text" class="input" v-model="tel" placeholder="请输入手机号的前7位">
        <button class="button" @click="sendTel">查询</button>
    </div>
</template>

<script>
    export default {
        name: "Search",

        //数据
        data() {
            return {
                tel : ''
            }
        },

        //方法
        methods : {
            //提交号码
            sendTel() {
                this.$emit('child-event', this.tel)
            }
        }
    }
</script>

<style scoped>
    .search {
        display: flex;
        width: 95%;
        margin: 10px;
    }
    .search input.input {
        flex: 3;
        margin: 2px;
        border-radius: 2px;
        border:1px solid #ccc;
        background-color: white;
        height: 30px;
        padding: 5px;
        font-size: 14px;
        color: #666;
    }
    .search button.button {
        flex: 1;
        margin: 2px;
        border-radius: 2px;
        border: 0;
        background-color: #666;
        color: white;
        cursor: pointer;
    }
    .search button.button:hover {
        background-color: #333;
    }
</style>