<template>
    <div class="list">
        <h3>{{$store.state.list.name}}</h3>
        <h3>{{getName}}1</h3>
        <h3>{{$store.state.name}}</h3>
        <button @click="setName">获取+</button>
    </div>
</template>

<script>
    export default {
        name: "List",
        computed : {
            getName() {
                return this.$store.getters['list/getName']
            }
        },
        methods : {
            setName() {
                //console.log(this.$store.state)
                this.$store.dispatch('list/setName')
            }
        }
    }
</script>

<style scoped>

</style>