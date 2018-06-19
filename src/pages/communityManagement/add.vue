<template>
	<div class="add_page">
		<step-nav :list="navList" :step="nowStep"></step-nav>
		<div class="view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import stepNav from '@c/step'
	import { reqs_sys_get } from '../../common/js/requires'
	export default {
		data () {
			return {
				navList: [
					{ text: '填写信息' },
					{ text: '配置费用' },
					{ text: '配置其它' },
					{ text: '导入数据' }
				],
				nowStep: 0
			}
		},
		created () {
			if(this.$route.path.match(/add\/\d/)){
				this.nowStep = Number(this.$route.path.match(/add\/(\d)/)[1]) - 1;
			}
			else{
				this.$router.replace('/community/add/1');
			}
			this.getUnFinish();
		},
		watch: {
			$route () {
				if(this.$route.path.match(/add\/\d/)){
					this.nowStep = Number(this.$route.path.match(/add\/(\d)/)[1]) - 1
				}
				else{
					this.$router.replace('/community/add/1')
				}
			}
		},
		components: {
			stepNav
		},
		methods: {
			getUnFinish () {
				return reqs_sys_get.getUnFinish().then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.add_page{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-left: calc(100vw - 100%);
		overflow-y: auto;
	}
</style>