<template>
    <div>
        <h3>User Id : {{id}}</h3>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "User",
        props : ['id']
        // props : {
        //     id : Number
        // }
    }
</script>

<style scoped>

</style>