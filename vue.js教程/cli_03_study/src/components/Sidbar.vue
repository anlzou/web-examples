<template>
	<ul class="link">
		<li v-for="item in link"><a href="#">{{item}}</a></li>
	</ul>
</template>

<script>
	export default{
		name:"Sidebar",
		data(){
			return {
				link:['首页', '资讯', '图文', '关于']
			}
		}
	}
</script>

<style scoped>
	.link a{
		color: red;
	}
</style>
