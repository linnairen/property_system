<template>
	<div class="set_pass">
		<div class="top clearfix">
			<div class="title l">
				<i></i>
				<span>{{ isReset ? '重置密码' : '修改密码' }}</span>
			</div>
			<div class="back r" @click="$router.go(-1)"></div>
		</div>
		<div class="form">
			<div class="input">
				<label>
					<img src="../../assets/24-phone-1.png" alt="" />
					<input type="text" 
						v-model="phone" 
						placeholder="请输入手机号" 
						maxlength="11"
						@focus="$root.isIE9 && (phone == '请输入手机号') && (phone = '')" 
						@blur="$root.isIE9 && (phone == '') && (phone = '请输入手机号')" />
				</label>
			</div>
			<div class="input">
				<label :class="{ short: isReset }">
					<img src="../../assets/24-key-1.png" alt="" />
					<input placeholder="请输入原密码" 
						v-model="old" 
						v-if="!isReset" 
						:type="$root.isIE9 && (old == '请输入原密码') ? 'text' : 'password'" 
						@focus="$root.isIE9 && (old == '请输入原密码') && (old = '')" 
						@blur="$root.isIE9 && (old == '') && (old = '请输入原密码')" />
					<input type="text" 
						v-model="code"
						placeholder="请输入验证码" 
						@focus="$root.isIE9 && (code == '请输入验证码') && (code = '')" 
						@blur="$root.isIE9 && (code == '') && (code = '请输入验证码')" 
						v-if="isReset" />
				</label>
				<button v-if="isReset" @click="getCode">获取验证码</button>
			</div>
			<div class="input">
				<label>
					<img src="../../assets/24-lock-1.png" alt="" />
					<input placeholder="请输入密码" 
						v-model="pass" 
						:type="$root.isIE9 && (pass == '请输入密码') ? 'text' : 'password'" 
						@focus="$root.isIE9 && (pass == '请输入密码') && (pass = '')" 
						@blur="$root.isIE9 && (pass == '') && (pass = '请输入密码')" />
				</label>
			</div>
			<div class="input">
				<label>
					<img src="../../assets/24-confirm-1.png" alt="" />
					<input placeholder="请确认密码" 
						v-model="confirm" 
						:type="$root.isIE9 && (confirm == '请确认密码') ? 'text' : 'password'" 
						@focus="$root.isIE9 && (confirm == '请确认密码') && (confirm = '')" 
						@blur="$root.isIE9 && (confirm == '') && (confirm = '请确认密码')" />
				</label>
			</div>
			<div class="btn">
				<button @click="setPassword">{{ isReset ? '重置密码' : '更新密码' }}</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				phone: this.$root.isIE9 ? '请输入手机号' : '',
				old: this.$root.isIE9 ? '请输入原密码' : '',
				code: this.$root.isIE9 ? '请输入验证码' : '',
				pass: this.$root.isIE9 ? '请输入密码' : '',
				confirm: this.$root.isIE9 ? '请确认密码' : ''
			}
		},
		computed: {
			isReset () {
				return this.$route.params && !!this.$route.params.isReset
			}
		},
		created () {
		},
		methods: {
			getCode () {
				
			},
			setPassword () {
				let that = this
				if(this.isReset){
					this.$alert('重置密码成功', '提示', {
			          confirmButtonText: '确定',
			          callback: action => {
			          	that.$router.push('/login')
			          }
			        });
				}
				else{
					this.$alert('修改密码成功', '提示', {
			          confirmButtonText: '确定',
			          callback: action => {
			          	that.$router.push('/login')
			          }
			        });
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.set_pass{
		max-width: 1200px;
		margin: 0 auto;
		height: 100%;
		overflow: auto;
		position: relative;
	}
	.top{
		height: 50px;
		line-height: 50px;
		.title{
			font-size: 0;
			i{
				display: inline-block;
				width: 10px;
				height: 24px;
				background: #666;
				vertical-align: middle;
				margin-right: 10px;
			}
			span{
				display: inline-block;
				vertical-align: middle;
				font-size: 20px;
				color: #666;
			}
		}
		.back{
			height: 50px;
			width: 50px;
			background: url(../../assets/36-back-1.png) no-repeat center center/36px 36px;
		}
	}
	.form{
		max-width: 1200px;
		position: relative;
		top: 20px;
		top: calc(50% - 220px);
	}
	.input{
		text-align: center;
		margin-bottom: 20px;
		font-size: 0;
		label{
			display: inline-block;
			width: 500px;
			height: 50px;
			font-size: 16px;
			line-height: 50px;
			border-radius: 25px;
			border: 1px solid #6496E1;
			img{
				width: 24px;
				height: 24px;
				margin-right: 10px;
			}
			input{
				border: none;
				line-height: 50px;
				height: 50px;
				width: 420px;
				box-sizing: border-box;
				font-size: 16px;
				color: #999;
			}
		}
		.short{
			width: 320px;
			input{
				width: 240px;
			}
		}
		button{
			background: #6496E1;
			color: #fff;
			width: 150px;
			height: 50px;
			border-radius: 25px;
			margin-left: 30px;
			font-size: 16px;
		}
	}
	.btn{
		text-align: center;
		padding: 50px 0 0;
		button{
			width: 500px;
			height: 50px;
			border-radius: 25px;
			background: #6496E1;
			color: #fff;
			font-size: 24px;
		}
	}
</style>