<template>
	<h2 class="title">{{title}}</h2>
</template>

<script>
	export default {
		name: "Header",
		props: {
			title: String
		}
	}
</script>

<style>
	.title {
		color:goldenrod;
	}
</style>
