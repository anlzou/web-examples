<template>
  <div class="about">
    <h1>This is an about page 共享：{{$store.state.count}}</h1>
    <button @click="increment">共享+</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    methods : {
      increment() {
        //this.$store.commit('increment')
        this.$store.state.count++
      }
      //...mapMutations(['increment'])
      // ...mapMutations({
      //   add : 'increment'
      // })
    }
  }
</script>
