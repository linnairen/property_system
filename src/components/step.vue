<template>
	<div class="nav_main">
		<ul class="clearfix">
			<li v-for="(item,index) in list" :key="index" class="clearfix">
				<div class="icon l">
					<div class="num" :style="{ background: index < step || index == 0 ? '#ff9900' : '#ccc' }">{{ index + 1 }}</div>
					<div class="text" :style="{ color: index < step || index == 0 ? '#ff9900' : '#666' }">{{ item.text }}</div>
				</div>
				<div class="direct l" v-if="index != list.length - 1">
					<img v-if="index >= step" src="../assets/out.png"/>
					<img v-if="index < step" src="../assets/36-open-3.png"/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		props: {
			step: {
				type: Number,
				default: 0
			},
			list: {
				type: Array,
				default: function () {
					return [{ text: '第一步' },{ text: '第二步' }]
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.nav_main{
		padding: 15px 0;
		text-align: center;
		li{
			display: inline-block;
			margin-right: 40px;
			&:last-child{
				margin: 0;
			}
		}
		.icon{
			height: 100px;
			width: 80px;
			margin-right: 40px;
			.num{
				width: 50px;
				height: 50px;
				border-radius: 100%;
				text-align: center;
				color: #fff;
				line-height: 50px;
				font-size: 25px;
				margin: 0 auto;
			}
			.text{
				text-align: center;
				line-height: 50px;
			}
			&:last-child{
				margin: 0;
			}
		}
		.direct{
			height: 100px;
			width: 80px;
			line-height: 100px;
			img{
				width: 36px;
				height: 36px;
			}
		}
	}
</style>