<template>
    <div class="home">
        <Header :today="today"></Header>
        <List :today="today"></List>
        <Footer @child-event="getSendDate"></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from '@/components/HelloWorld.vue'
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"
    import List from "@/components/List"

    export default {
        name: 'Home',

        //数据
        data() {
            return {
                today : this.getDate()
            }
        },

        //组件
        components: {
            Header,
            Footer,
            List
        },

        //方法
        methods : {
            //获取 月/日
            getDate() {
                //时间对象
                const date = new Date()

                //返回 月/日
                return (date.getMonth() + 1) + '/' + date.getDate()
            },

            //获取自定义事件提交过来的日期
            getSendDate(today) {
                //不为空的情况下
                if (today !== '/') {
                    this.today = today
                } else {
                    this.today = this.getDate()
                }
            }
        }
    }
</script>
