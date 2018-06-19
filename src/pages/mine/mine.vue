<template>
	<div class="mine_page">
		<div class="mine_box">
			<div class="left_box">
				<div class="head_img"><img src="../../assets/default_head.png" /></div>
				<div class="info">
					<p><strong>用户名：</strong><span>{{ getMineInfo.name }}</span></p>
					<p><strong>角色：</strong><span>{{ getMineInfo.role }}</span></p>
					<p><strong>登录时间：</strong><span>{{ getRegularStringFromSeconds(getMineInfo.time,true) }}</span></p>
				</div>
				<div class="btn"><button class="blue_text_btn" @click="$router.push({ path: '/setPassword' })">修改密码</button></div>
				<div class="btn"><button class="orange_text_btn" @click="$router.push({ path: '/login' })">我要退出</button></div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data () {
			return {
				
			}
		},
		computed: {
			...mapGetters([
				'getMineInfo'
			])
		},
		methods: {
			getRegularStringFromSeconds
		}
	}
</script>

<style scoped lang="scss">
	.mine_page{
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		padding: 20px 0;
		overflow: auto;
	}
	.mine_box{
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
	}
	.left_box{
		height: 540px;
		width: 250px;
		border-radius: 30px;
		background: #f2f2f2;
	}
	.head_img{
		padding: 45px 25px 0;
		img{
			width: 200px;
			height: 200px;
		}
	}
	.info{
		padding: 20px 0 0;
		margin-bottom: 50px;
		p{
			line-height: 30px;
			font-size: 0;
		}
		strong,span{
			display: inline-block;
			vertical-align: middle;
			font-size: 15px;
			color: #666;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		strong{
			width: 40%;
			text-align: right;
		}
		span{
			width: 60%;
			text-align: left;
		}
	}
	.mine_page .btn{
		text-align: center;
		margin-bottom: 20px;
		button{
			width: 150px;
			height: 40px;
			box-sizing: border-box;
			/*background: #fff;*/
			border-radius: 20px;
			/*border: 1px solid #6496e1;*/
			/*color: #6496e1;*/
			font-size: 18px;
		}
		&:last-child{
			margin-bottom: 0;
			button{
				/*border: 1px solid #ff6600;
				color: #ff6600;*/
			}
		}
	}
</style>