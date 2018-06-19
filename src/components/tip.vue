<template>
	<div class="tip" v-show="showTime" :class="className">
		<span>{{ msg }}</span>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		data () {
			return {
				msg: '',
				showTime: 0,
				className: '',
				timeKey: null
			}
		},
		created () {
			var that = this
			Vue.prototype.$tip = function (msg,type,time) {
				that.showTime = time > 1000 ? time : 3000;
				that.msg = msg;
				that.className = (type || 'info') + '_tip';
			}
		},
		watch: {
			showTime (nv) {
				this.timeKey && clearTimeout(this.timeKey)
				if(nv > 0 && nv - 100 > 0){
					this.timeKey = setTimeout(() => {
						this.showTime -= 100
					},100)
				}
				else if(nv > 0 && nv - 100 <= 0){
					this.timeKey = setTimeout(() => {
						this.showTime = 0
					},nv)
				}
				else if(nv < 0){
					this.showTime = 0
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../common/style/materials.scss";
	.tip{
		position: fixed;
		width: 300px;
		box-sizing: border-box;
		padding: 0 20px;
		border-radius: 20px;
		box-sizing: border-box;
		line-height: 36px;
		text-align: center;
		top: 50px;
		left: 50%;
		margin-left: -150px;
		font-size: 16px;
		white-space: pre-wrap;
		word-break: break-all;
		z-index: 99999999999999;
		color: #fff;
		border: 1px solid #fff;
		background: #aaa;
		user-select: none;
	}
	.info_tip{
		color: $color-blue;
		border: 1px solid $color-blue;
		background: #fff;
	}
	.success_tip{
		color: $color-orange;
		border: 1px solid $color-orange;
		background: #fff;
	}
	.error_tip{
		color: #fff;
		border: 1px solid #fff;
		background: $color-red;
	}
</style>