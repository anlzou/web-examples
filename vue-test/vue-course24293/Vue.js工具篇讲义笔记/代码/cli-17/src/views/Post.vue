<template>
    <div class="post">
        <h3>{{$store.state.info}}</h3>
        <button @click="setInfo">获取+</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Post",
        methods : {
            // setInfo() {
            //     this.$store.dispatch('setInfo')
            // }
            ...mapActions(['setInfo'])
        }
    }
</script>

<style scoped>

</style>