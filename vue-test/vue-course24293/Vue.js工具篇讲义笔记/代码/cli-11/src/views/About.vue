<template>
  <div class="about">
    <p>私有：{{count}}, 共享：{{storeState.count}}</p>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  import store from "@/store"

  export default {

    data() {
      return {
        storeState: store.state
      }
    }

    // beforeRouteEnter(to, from, next) {
    //   console.log('组件被激活~' + this)
    //   next(vm => {
    //     console.log(vm)
    //   })
    // },
    // beforeRouteLeave(to, from, next) {
    //   console.log('组件被失活~离开~' + this)
    //   next(true)
    // },
    // beforeRouteUpdate(to, from, next) {
    //   console.log('组件被复用~about/:id~' + this)
    //   next()
    // },
  }
</script>