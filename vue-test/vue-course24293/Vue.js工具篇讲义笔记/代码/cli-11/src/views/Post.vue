<template>
    <div class="post">
<!--        <div v-if="loading">-->
<!--            Loading...-->
<!--        </div>-->
        <div v-if="post">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
    // export default {
    //     name: "Post",
    //     data() {
    //         return {
    //             loading : false,
    //             post : null
    //         }
    //     },
    //     //组件创建完毕
    //     created() {
    //         //执行获取数据
    //         this.getData()
    //     },
    //     methods: {
    //         //获取数据
    //         getData() {
    //             this.loading = true
    //             //模拟开始获取数据
    //             setTimeout(() => {
    //                 //关闭loading
    //                 this.loading = false
    //                 this.post = {
    //                     title : '标题',
    //                     body  : '内容...'
    //                 }
    //             }, 1000)
    //         }
    //     }
    // }

    export default {
        name: "Post",
        data() {
            return {
                post : null
            }
        },
        //导航完成之前
        beforeRouteEnter(to, from, next) {
            setTimeout(() => {
                next(vm => {
                    vm.getData()
                })
            }, 2000);

        },
        methods: {
            //获取数据
            getData() {
                this.post = {
                    title : '标题',
                    body  : '内容...'
                }
            }
        }
    }
</script>

<style scoped>

</style>