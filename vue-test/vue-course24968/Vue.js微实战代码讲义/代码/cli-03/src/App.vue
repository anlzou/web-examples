<template>
    <div id="app">
        <!--需要缓存的视图，Home.vue 会执行-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <!--不需要缓存的视图，Details.vue 会执行-->
        <router-view v-if="!$route.meta.keepAlive"/>
    </div>
</template>

<style>
    body {
        margin: 0;
        padding: 0;
    }
</style>
