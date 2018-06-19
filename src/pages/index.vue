<template>
	<div class="main">
		<div class="nav">
			<div class="center">
				<img src="../assets/logo.png" />
				<el-menu :default-active="$route.path" class="nav_list" mode="horizontal" @select="handleSelect" background-color="#6496e1" text-color="#e4e4e4" active-text-color="#ffd04b" :router="true">
					<el-menu-item v-for="(item,index) in $router.options.routes[0].children" :index="$router.options.routes[0].path + item.path" :key="index" v-if="!item.hidden">
						{{item.title}}
					</el-menu-item>
				</el-menu>
				<div class="mine" @click="$router.push({ path: '/mine' })" :title="getMineInfo.name">{{ getMineInfo.name }}</div>
			</div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
		<div class="bottom">&copy; 2018 浙江萝泊科技有限公司 版权所有</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				activeIndex: '0'
			}
		},
		created() {
//			this.$router.push('login')
		},
		computed: {
			...mapGetters([
				'getMineInfo'
			])
		},
		methods: {
			handleSelect () {
				
			}
		}
	}
</script>

<style scoped>
	.main{
		height: 100%;
		width: 100%;
	}
	.nav{
		background: #6496e1;
	}
	.center{
		position: relative;
		max-width: 1200px;
		padding: 0 70px;
		box-sizing: border-box;
		margin: 0 auto;
		height: 60px;
	}
	.nav img{
		position: absolute;
		top: 50%;
		margin-top: -25px;
		left: 0;
		width: 50px;
		height: 50px;
		z-index: 200;
	}
	.nav_list{
		display: inline-block;
		border: none;
	}
	.content{
		height: calc(100% - 101px);
		width: 100%;
		overflow: hidden;
	}
	.bottom{
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #999;
		font-size: 16px;
		background: #f1f1f1;
	}
	.mine{
		position: absolute;
		right: 20px;
		top: 50%;
		height: 40px;
		line-height: 40px;
		width: 100px;
		/*text-align: right;*/
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: -20px;
		color: #fff;
		white-space: nowrap;
		cursor: pointer;
	}
</style>