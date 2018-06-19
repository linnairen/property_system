<template>
	<div class="step_item">
		<div class="title">
			<i></i>
			<span>配置参数（其他）</span>
		</div>
		<div class="content">
			<div class="module">人员配置（每个职位至少填写一人）</div>
			<div class="clearfix">
				<div v-for="(item,index) in managerList">
					<ul class="clearfix four_fifths l">
						<li class="l half">
							<strong>*物业管理员{{ index+1 }}：</strong>
							<div class="inp">
								<input type="text" v-model="item.name" />
							</div>
						</li>
						<li class="l half">
							<strong>*物业管理员{{ index+1 }}-联系电话：</strong>
							<div class="inp">
								<input type="text" v-model="item.phone" />
							</div>
						</li>
					</ul>
					<div class="l one_fifth" style="line-height: 50px;">
						<div class="add_img_btn" v-if="index == managerList.length - 1" @click="addObj(managerList)"></div>
						<div class="del_img_btn" v-if="managerList.length != 1" @click="managerList.splice(index,1)"></div>
					</div>
				</div>
				<div v-for="(item,index) in servicerList">
					<ul class="clearfix four_fifths l">
						<li class="l half">
							<strong>*客服人员{{ index+1 }}：</strong>
							<div class="inp">
								<input type="text" v-model="item.name" />
							</div>
						</li>
						<li class="l half">
							<strong>*客服人员{{ index+1 }}-联系电话：</strong>
							<div class="inp">
								<input type="text" v-model="item.phone" />
							</div>
						</li>
					</ul>
					<div class="l one_fifth" style="line-height: 50px;">
						<div class="add_img_btn" v-if="index == servicerList.length - 1" @click="addObj(servicerList)"></div>
						<div class="del_img_btn" v-if="servicerList.length != 1" @click="servicerList.splice(index,1)"></div>
					</div>
				</div>
				<div v-for="(item,index) in maintainerList">
					<ul class="clearfix four_fifths l">
						<li class="l half">
							<strong>*维修人员{{ index+1 }}：</strong>
							<div class="inp">
								<input type="text" v-model="item.name" />
							</div>
						</li>
						<li class="l half">
							<strong>*维修人员{{ index+1 }}-联系电话：</strong>
							<div class="inp">
								<input type="text" v-model="item.phone" />
							</div>
						</li>
					</ul>
					<div class="l one_fifth" style="line-height: 50px;">
						<div class="add_img_btn" v-if="index == maintainerList.length - 1" @click="addObj(maintainerList)"></div>
						<div class="del_img_btn" v-if="maintainerList.length != 1" @click="maintainerList.splice(index,1)"></div>
					</div>
				</div>
			</div>
			<div class="module">联系配置</div>
			<div class="clearfix">
				<ul class="clearfix four_fifths l">
					<li class="l half">
						<strong>*物管电话（维修）：</strong>
						<div class="inp">
							<input type="text" v-model="phone" />
						</div>
					</li>
					<li class="l half">
						<strong>微信客服号：</strong>
						<div class="inp">
							<input type="text" v-model="weChat" />
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="warming">
			注：与费用相关的参数，需设定执行日期。
		</div>
		<div class="btn_list">
			<button class="blue_text_btn" @click="$router.go(-1)">取消</button>
			<button class="blue_fill_btn" @click="$router.replace('4')">保存并导入数据</button>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				managerList: [
					{ name: '',phone: '' }
				],
				servicerList: [
					{ name: '',phone: '' }
				],
				maintainerList: [
					{ name: '',phone: '' }
				],
				phone: '',
				weChat: ''
			}
		},
		methods: {
			addObj (obj) {
				obj.push({ name: '',phone: '' })
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../common/style/materials.scss";
	.module{
		border-bottom: 1px solid #CCCCCC;
		font-size: 16px;
		color: $color-blue;
		line-height: 50px;
		margin-bottom: 10px;
	}
	.input_box{
		width: 90%;
		margin: 0 auto;
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 6px 0;
		margin-bottom: 10px;
	}
</style>