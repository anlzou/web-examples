<template>
    <!--头部-->
    <header>
        <h3>历史上的今天：{{today}}</h3>
    </header>
</template>

<script>
    export default {
        name: "Header",

        props : {
            today : String
        }
    }
</script>

<style scoped>
    header {
        background-color: #eee;
        position: fixed;
        top: 0;
        width: 100%;
    }
    header h3 {
        margin: 0;
        padding: 0;
        text-align: center;
        color: #666;
        font-weight: normal;
        height: 40px;
        line-height: 40px;
    }
</style>