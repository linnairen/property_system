<template>
	<div class="step_item">
		<div class="title">
			<i></i>
			<span>填写小区信息</span>
			<button class="orange_text_btn">下载模板</button>
		</div>
		<div class="upload_box">
			<ul>
				<li>
					<div class="with_btn_inp"><input type="text" value="房产信息：请选择文件" disabled="disabled" /><label class="blue_text_btn">选择<input type="file" /></label></div><button class="blue_fill_btn">导入数据</button>
				</li>
				<li>
					<div class="with_btn_inp"><input type="text" value="业主、住户信息：请选择文件" disabled="disabled" /><label class="blue_text_btn">选择<input type="file" /></label></div><button class="blue_fill_btn">导入数据</button>
				</li>
				<li>
					<div class="with_btn_inp"><input type="text" value="车位、车库信息：请选择文件" disabled="disabled" /><label class="blue_text_btn">选择<input type="file" /></label></div><button class="blue_fill_btn">导入数据</button>
				</li>
				<li>
					<div class="with_btn_inp"><input type="text" value="车辆信息：请选择文件" disabled="disabled" /><label class="blue_text_btn">选择<input type="file" /></label></div><button class="blue_fill_btn">导入数据</button>
				</li>
			</ul>
		</div>
		<div class="warming">
			<p>注：请下载“模板”，按要求填写并导入（可多次导入，原有数据将被后来数据覆盖）。</p>
			<p>请先导入房产数据，成功后再导入其它数据。</p>
       		<p>小区创建“完成”后，数据无法再次导入，收费功能可正常使用。</p>
		</div>
		<div class="btn_list">
			<button class="blue_text_btn" @click="$router.go(-1)">取消</button>
			<button class="blue_fill_btn" @click="$router.replace('/')">完成</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.upload_box{
		padding: 20px 0;
		li{
			height: 70px;
			line-height: 70px;
			text-align: center;
			.with_btn_inp{
				vertical-align: middle;
			}
			.blue_fill_btn{
				width: 150px;
				height: 40px;
				border-radius: 20px;
				margin-left: 50px;
			}
		}
	}
</style>