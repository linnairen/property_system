<template>
	<div class="step_item">
		<div class="title">
			<i></i>
			<span>填写小区信息</span>
		</div>
		<div class="content clearfix">
			<ul class="l" style="width: 50%;">
				<li>
					<strong>*小区名称：</strong>
					<div class="inp">
						<input type="text" />
					</div>
				</li>
				<li>
					<strong>*地址：</strong>
					<textarea rows="2"></textarea>
				</li>
				<li>
					<strong>*建筑面积：</strong>
					<div class="inp">
						<input type="text" />
						<span>m<sup>2</sup></span>
					</div>
				</li>
				<li>
					<strong>*总幢数：</strong>
					<div class="inp">
						<input type="text" />
						<span>幢</span>
					</div>
				</li>
				<li>
					<strong>*住户总数：</strong>
					<div class="inp">
						<input type="text" />
						<span>户</span>
					</div>
				</li>
				<li>
					<strong>*车位总数：</strong>
					<div class="inp">
						<input type="text" />
						<span>个</span>
					</div>
				</li>
				<li>
					<strong>地面车位：</strong>
					<div class="inp">
						<input type="text" />
						<span>个</span>
					</div>
				</li>
				<li>
					<strong>车库：</strong>
					<div class="inp">
						<input type="text" />
						<span>个</span>
					</div>
				</li>
			</ul>
			<ul class="l" style="width: 50%;">
				<li>
					<strong></strong>
					<img src="../../../assets/pic-xq01.png"/>
				</li>
				<li>
					<strong>地下车位：</strong>
					<div class="inp">
						<input type="text" />
						<span>个</span>
					</div>
				</li>
				<li>
					<strong>小区平面图：</strong>
					<div class="inp">
						<input type="text" placeholder="请选择上传" disabled="disabled" />
						<label for="upload" class="blue_fill_btn">上传</label>
						<input type="file" accept="image/*" id="upload" />
					</div>
				</li>
			</ul>
		</div>
		<div class="warming">
			注：请先填写小区信息，然后配置参数，最后进行导入数据。
		</div>
		<div class="btn_list">
			<button class="blue_text_btn" @click="$router.go(-1)">取消</button>
			<button class="blue_fill_btn" @click="$router.replace('2')">保存并配置费用参数</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	
</style>