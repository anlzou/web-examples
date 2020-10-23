<template>
    <!--尾部-->
    <footer>
        <div>
            <input type="number" placeholder="月" v-model="month" class="date">
        </div>
        <div>
            <input type="number" placeholder="日" v-model="day" class="date">
        </div>
        <div>
            <button type="button" class="submit" @click="sendDate">查看</button>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",

        //数据
        data() {
            return {
                month : '',
                day   : ''
            }
        },

        //方法
        methods : {
            //提交日期
            sendDate() {
                this.$emit('child-event', this.month + '/' + this.day)
            }
        }
    }
</script>

<style scoped>
    footer {
        background-color: #eee;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        height: 35px;
        line-height: 35px;
        padding: 5px 0;
    }
    footer div {
        flex : 1;
        padding-left: 5px;
    }
    footer input.date {
        border: 0;
        background-color: #fff;
        color: #666;
        padding: 5px;
        width: 90%;
        height: 25px;
        -moz-appearance: textfield;
    }
    footer button.submit {
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        background-color: #fff;
        width: 80%;
        height: 100%;
        color: #666;
    }
</style>