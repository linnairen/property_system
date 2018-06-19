<template>
	<div class="list">
		<div class="search clearfix">
			<div class="l">
				<div class="inp">
					<input type="text" />
					<button class="blue_fill_btn">查询</button>
				</div>
			</div>
			<div class="l">
				<div class="inp">
					<input type="text" />
					<button class="blue_fill_btn">查询</button>
				</div>
			</div>
			<div class="l">
				<button class="btn orange_fill_btn" @click="$router.push('add/')">新建小区</button>
			</div>
		</div>
		<div class="table">
			<div class="item clearfix" v-for="(item,index) in list">
				<div class="img l">
					<img :src="item.imgUrl" class="big" />
					<img src="../../assets/36-edit-2.png" class="edit" />
				</div>
				<div class="content l">
					<div class="top">
						<div class="title">{{ item.text }}</div>
						<div class="address">地址：{{ item.address }}</div>
						<div class="phone">物管电话：{{ item.phone }}</div>
						<button class="enter blue_text_btn">进入</button>
					</div>
					<div class="bottom">
						<table cellspacing="0">
							<tr>
								<th>建筑面积</th><th>幢数</th><th>住户总数</th><th colspan="2">车位</th>
							</tr>
							<tr>
								<td>1</td><td>1</td><td>1</td><td colspan="2">1</td>
							</tr>
							<tr>
								<th colspan="2">物管费合计</th><th>停车费合计</th><th>其它费用合计</th><th>欠费合计</th>
							</tr>
							<tr>
								<td colspan="2">1</td><td>1</td><td>1</td><td>1</td>
							</tr>
							<tr>
								<th colspan="2">维修单合计</th><th>借物单合计</th><th></th><th>投诉单合计</th>
							</tr>
							<tr>
								<td colspan="2">1</td><td>1</td><td>1</td><td>1</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				communityName: '',
				mobile: '',
				list: [
					{
						tid: 123,
						text: '嘿嘿嘿哈哈哈哈哈哈h小区',
						imgUrl: require('../../assets/u33.png'),
						address: '11111111111111111111111111111111111111111',
						phone: '15155555555'
					},
					{
						tid: 124,
						text: '哈哈哈小区',
						imgUrl: require('../../assets/u33.png'),
						address: '11111111111111111111111111111111111111111',
						phone: '15155555555'
					}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../common/style/materials.scss";
	.list{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.search{
		position: absolute;
		top: 0;
		left: 50%;
		padding: 20px 50px;
		height: 80px;
		box-sizing: border-box;
		/*width: 90%;*/
		margin: 0 0 0 -500px;
		width: 1000px;
		background: #fff;
		z-index: 100;
		.l{
			margin-right: 50px;
			&:last-child{
				margin-right: 0;
			}
		}
		.inp{
			width: 300px;
			height: 40px;
			line-height: 38px;
			border: 1px solid $color-blue;
			box-sizing: border-box;
			border-radius: 20px;
			position: relative;
			font-size: 0;
			overflow: hidden;
			input{
				width: 200px;
				height: 36px;
				box-sizing: border-box;
				padding: 0 20px;
				vertical-align: middle;
				font-size: 16px;
			}
			button{
				vertical-align: middle;
				width: 98px;
				height: 40px;
				/*background: $color-blue;*/
				/*color: #fff;*/
				border-radius: 20px;
				font-size: 16px;
				position: absolute;
				right: -1px;
				top: -1px;
			}
		}
		.btn{
			width: 150px;
			height: 40px;
			border-radius: 20px;;
		}
	}
	.table{
		height: 100%;
		padding: 80px 30px 0;
		box-sizing: border-box;
		overflow: auto;
	}
	.item{
		margin: 20px auto 0;
		width: 90%;
		padding: 5px 30px;
		box-sizing: border-box;
		max-width: 1200px;
		background: #f2f2f2;
		border-radius: 30px;
		.img{
			position: relative;
			margin-right: 20px;
			.big{
				width: 300px;
				height: 250px;
			}
			.edit{
				position: absolute;
				right: 20px;
				bottom: 20px;
				width: 36px;
				height: 36px;
			}
		}
		.content{
			width: calc(100% - 320px);
		}
		.top{
			height: 80px;
			padding: 5px 0;
			position: relative;
			.title{
				font-size: 20px;
				color: #76a9e0;
			}
			.address,.phone{
				font-size: 16px;
				color: #666;
			}
			.enter{
				position: absolute;
				right: 0;
				top: 50%;
				font-size: 18px;
				border-radius: 100%;
				width: 60px;
				height: 60px;
				margin-top: -30px;
				/*border: 1px solid #80afe2;*/
				/*background: #fff;*/
				/*color: #80afe2;*/
			}
		}
		.bottom{
			table{
				width: 100%;
				border-top: 1px solid #ccc;
				border-left: 1px solid #ccc;
				th,td{
					border-bottom: 1px solid #ccc;
					border-right: 1px solid #ccc;
					text-align: center;
					font-size: 16px;
					line-height: 1.4;
					font-weight: normal;
					color: #666;
				}
				td{
					background: #fff;
				}
			}
		}
	}
</style>