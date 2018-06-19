<template>
	<div class="default clearfix">
		<div class="left_nav l" :class="{ in_left: inLeft }" v-show="showNav">
			<div class="title">
				<i></i>
				<span>小区列表</span>
				<img :src="inLeft ? require('../../assets/out.png') : require('../../assets/in.png')" @click="inLeft = !inLeft" />
			</div>
			<div v-show="!inLeft">
				<ul class="list">
					<li v-for="(item,index) in list" :class="{ selected: $route.params && item.tid == $route.params.tid }" @click="$router.push({ path: '/community/' + item.tid })">
						<img :src="item.imgUrl"/><span>{{item.text}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="area l" :class="{ to_big: inLeft, to_biger: inLeft && !showNav }">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				inLeft: false,
				showNav: true,
				list: [
					{
						tid: 123,
						text: '嘿嘿嘿哈哈哈哈哈哈h小区',
						imgUrl: require('../../assets/u33.png')
					},
					{
						tid: 124,
						text: '哈哈哈小区',
						imgUrl: require('../../assets/u33.png')
					}
				]
			}
		},
		created () {
			this.navFun();
		},
		watch: {
			'$route': function () {
				this.navFun();
			}
		},
		methods: {
			navFun () {
				if(this.$route.path.Hav('add')){
					this.showNav = false;
					this.inLeft = true;
				}
				else if(this.$route.path == '/community/'){
					this.showNav = true;
					this.inLeft = false;
				}
				else{
					this.showNav = true;
					this.inLeft = true;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.default{
		width: 100%;
		height: 100%;
	}
	.left_nav{
		width: 200px;
		height: 100%;
		background: #eee;
		position: relative;
		padding: 60px 0 0;
		box-sizing: border-box;
		transition: all 0.5s;
		overflow: auto;
	}
	.title{
		position: absolute;
		top: 0;
		left: 0;
		height: 60px;
		line-height: 60px;
		background: #eee;
		width: 170px;
		padding: 0 15px;
		font-size: 0;
		i{
			display: inline-block;
			vertical-align: middle;
			margin-right: 10px;
			width: 10px;
			height: 30px;
			background: #666;
		}
		span{
			display: inline-block;
			vertical-align: middle;
			font-size: 18px;
			width: 126px;
		}
		img{
			vertical-align: middle;
			width: 24px;
			height: 24px;
		}
	}
	.in_left{
		margin-left: -150px;
	}
	.area{
		width: calc(100% - 200px);
		height: 100%;
		transition: all 0.5s;
		margin: 0 auto;
	}
	.to_big{
		width: calc(100% - 50px);
	}
	.to_biger{
		width: 100%;
	}
	.list{
		width: 100%;
		font-size: 0;
		overflow: hidden;
		li{
			line-height: 50px;
			height: 50px;
			background: #fafafa;
			margin-bottom: 5px;
			white-space: nowrap;
			overflow: hidden;
			cursor: pointer;
		}
		img{
			height: 50px;
			width: 50px;
			margin-right: 10px;
			vertical-align: middle;
		}
		span{
			font-size: 16px;
			width: 140px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			line-height: 50px;
			display: inline-block;
			vertical-align: middle;
		}
		.selected{
			background: #fff;
		}
	}
</style>