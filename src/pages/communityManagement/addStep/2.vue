<template>
	<div class="step_item">
		<div class="title">
			<i></i>
			<span>配置参数（费用）</span>
		</div>
		<div class="content">
			<div class="module">户型与物管费配置（至少填写1组）</div>
			<div class="input_box clearfix">
				<ol style="width: 60%;" class="l">
					<li><strong>户型1：</strong><div class="check_box"><span v-for="item in checkList1" :class="{ checked: item.checked }" @click="item.checked = !item.checked"><i></i>{{ item.text }}</span></div></li>
				</ol>
				<ol style="width: 40%;" class="l">
					<li><strong>物管费单价：</strong><div class="inp"><input type="text" /><span>元</span></div></li>
				</ol>
			</div>
			<div class="input_box clearfix">
				<ol style="width: 60%;" class="l">
					<li><strong>户型2：</strong><div class="check_box"><span v-for="item in checkList2" :class="{ checked: item.checked }" @click="item.checked = !item.checked"><i></i>{{ item.text }}</span></div></li>
				</ol>
				<ol style="width: 40%;" class="l">
					<li><strong>物管费单价：</strong><div class="inp"><input type="text" /><span>元</span></div></li>
				</ol>
			</div>
			<div class="input_box clearfix">
				<ol style="width: 60%;" class="l">
					<li><strong>户型3：</strong><div class="check_box"><span v-for="item in checkList3" :class="{ checked: item.checked }" @click="item.checked = !item.checked"><i></i>{{ item.text }}</span></div></li>
				</ol>
				<ol style="width: 40%;" class="l">
					<li><strong>物管费单价：</strong><div class="inp"><input type="text" /><span>元</span></div></li>
				</ol>
			</div>
			<div class="input_box clearfix">
				<ol style="width: 60%;" class="l">
					<li><strong>户型4：</strong><div class="check_box"><span v-for="item in checkList4" :class="{ checked: item.checked }" @click="item.checked = !item.checked"><i></i>{{ item.text }}</span><em>注：选中后，才能导入车位数据。</em></div></li>
				</ol>
				<ol style="width: 40%;" class="l">
					<li><strong>管理费（月）：</strong><div class="inp"><input type="text" /><span>元</span></div></li>
				</ol>
			</div>
			<div class="module">车位与包月收费配置（选填）</div>
			<div class="input_box clearfix">
				<ol style="width: 60%;" class="l">
					<li><strong>车位1：</strong><div class="check_box"><span v-for="item in checkList5" :class="{ checked: item.checked }" @click="item.checked = !item.checked"><i></i>{{ item.text }}</span></div></li>
				</ol>
				<ol style="width: 40%;" class="l">
					<li><strong>包月费：</strong><div class="inp"><input type="text" /><span>元</span></div></li>
				</ol>
			</div>
			<div class="input_box clearfix">
				<ol style="width: 60%;" class="l">
					<li><strong>车位2：</strong><div class="check_box"><span v-for="item in checkList6" :class="{ checked: item.checked }" @click="item.checked = !item.checked"><i></i>{{ item.text }}</span></div></li>
				</ol>
				<ol style="width: 40%;" class="l">
					<li><strong>包月费：</strong><div class="inp"><input type="text" /><span>元</span></div></li>
				</ol>
			</div>
			<div class="input_box clearfix">
				<ol style="width: 60%;" class="l">
					<li><strong>车位3：</strong><div class="check_box"><span v-for="item in checkList7" :class="{ checked: item.checked }" @click="item.checked = !item.checked"><i></i>{{ item.text }}</span></div></li>
				</ol>
				<ol style="width: 40%;" class="l">
					<li><strong>包月费：</strong><div class="inp"><input type="text" /><span>元</span></div></li>
				</ol>
			</div>
			<div class="module">其它收费配置（选填）</div>
			<div class="clearfix">
				<ul class="l" style="width: 50%" v-for="(item,index) in feeList">
					<li>
						<strong :class="{ checked: item.checked }" @click="item.value == undefined && (item.checked = !item.checked)"><i></i>费用名称{{ index+1 }}：</strong>
						<p>
							{{ item.text }}
							<button v-if="item.value == undefined" class="blue_fill_btn" @click="feeList.splice(index,1)">删除</button>
						</p>
					</li>
				</ul>
				<ul class="l" style="width: 50%">
					<li>
						<strong :class="{ checked: feeItem.checked }" @click="feeItem.checked = !feeItem.checked"><i></i>费用名称{{ feeList.length + 1 }}：</strong>
						<div class="inp">
							<input type="text" v-model="feeItem.text" />
							<button class="blue_fill_btn" @click="addFee">添加</button>
						</div>
					</li>
				</ul>
			</div>
			<div class="module">执行设定</div>
			<div class="clearfix">
				<ul class="l" style="width: 50%">
					<li>
						<strong>设定执行日期：</strong>
						<div class="inp">
							<input type="text" />
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
			<button class="blue_fill_btn" @click="$router.replace('3')">保存并配置其他参数</button>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				checkList1: [
					{ text: '单间',value: 1,checked: false },
					{ text: '一室一厅',value: 2,checked: false },
					{ text: '二室二厅',value: 3,checked: false },
					{ text: '二室一厅',value: 4,checked: false },
					{ text: '三室两厅',value: 5,checked: false },
					{ text: '三室一厅',value: 6,checked: false },
					{ text: '四室两厅',value: 7,checked: false },
					{ text: '四室一厅',value: 8,checked: false }
				],
				checkList2: [
					{ text: '别墅',value: 1,checked: false }
				],
				checkList3: [
					{ text: '门面房',value: 1,checked: false },
					{ text: '商铺',value: 2,checked: false }
				],
				checkList4: [
					{ text: '车库、车位（交易型）',value: 1,checked: false }
				],
				checkList5: [
					{ text: '地面车位',value: 1,checked: false }
				],
				checkList6: [
					{ text: '地下车位',value: 1,checked: false }
				],
				checkList7: [
					{ text: '车库',value: 1,checked: false }
				],
				feeList: [
					{ text: '装修押金（需退还）',value: 1,checked: true },
					{ text: '清洁费',value: 2,checked: true },
					{ text: '其它费用（需备注）',value: 3,checked: true },
					{ text: '其它费用（需备注）',checked: false }
				],
				feeItem: { text: '',checked: false }
			}
		},
		methods: {
			addFee () {
				this.feeList.push(this.feeItem)
				this.feeItem = { text: '',checked: false }
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