<template>
    <h3>这里是List页面组件 : {{data}}</h3>
</template>

<script>
    export default {
        name: "List",
        props : {
            data : {
                type : String,
                default : 'no data'
            }
        }
    }
</script>

<style scoped>

</style>