<template>
	<div id="app">
		<router-view/>
		<tip></tip>
	</div>
</template>

<script>
	import tip from '@c/tip'
	export default {
		name: 'App',
		components: {
			tip
		}
	}
</script>

<style lang="scss">
	#app {
	    width: 100%;
	    height: 100%;
	}
</style>