<template>
    <div class="home">
        <Search @child-event="getSendTel"></Search>
        <Show :tel="tel"></Show>
    </div>
</template>

<script>
    import Search from "@/components/Search"
    import Show from "@/components/Show"

    export default {
        name: 'Home',

        //数据
        data() {
            return {
                tel : ''
            }
        },

        //组件
        components: {
            Search,
            Show
        },

        //方法
        methods : {
            //获取提交的手机号
            getSendTel(tel) {
                this.tel = tel
            }
        }
    }
</script>
