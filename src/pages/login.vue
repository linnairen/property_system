<template>
	<div class="login">
		<div class="login_title">
			<img src="../assets/pic-text.png"/>
		</div>
		<div class="login_main">
			<div class="form_box">
				<div class="line">
					<div class="inp"><img src="../assets/24-phone-2.png" /><input type="text" v-model="phone" maxlength="11" placeholder="请输入手机号" @focus="$root.isIE9 && (phone == '请输入手机号') && (phone = '')" @blur="$root.isIE9 && (phone == '') && (phone = '请输入手机号')" /></div>
				</div>
				<div class="line">
					<div class="inp"><img src="../assets/24-lock-2.png" /><input :type="$root.isIE9 && (pass == '请输入密码') ? 'text' : 'password'" v-model="pass" placeholder="请输入密码" @focus="$root.isIE9 && (pass == '请输入密码') && (pass = '')" @blur="$root.isIE9 && (pass == '') && (pass = '请输入密码')" /></div>
				</div>
				<div class="line">
					<router-link to="/setPassword/1" class="link">忘记密码</router-link>
				</div>
				<div class="line">
					<button class="btn blue_fill_btn" @click="login">登录</button>
				</div>
				<div class="line">
					<div class="copy-right">&copy;2018 浙江萝泊科技有限公司 版权所有</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { reqs_auth_post } from '../common/js/requires'
	export default {
		data () {
			return {
				phone: this.$root.isIE9 ? '请输入手机号' : '',
				pass: this.$root.isIE9 ? '请输入密码' : ''
			}
		},
		created () {
			
		},
		methods: {
			login () {
				if(this.phone == '' || this.phone == '请输入手机号' || !isPhone(this.phone)){
					this.$tip('手机号码不正确','error');
					return
				}
				if(this.pass == '' || this.pass == '请输入密码'){
					this.$tip('密码不能为空','error');
					return
				}
				return reqs_auth_post.login({
					clientType: 5,
					mobile: this.phone,
					loginType: 'pwd',
					password: this.pass
				}).then(res => {
					if(res.code == 200){
						this.$router.push('/');
					}
					console.log(res.rs);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../common/style/materials.scss";
	.login{
		background: url(../assets/login_bg.jpg) no-repeat top center;
		background-color: #eee;
		height: 100%;
		position: relative;
	}
	.login_title{
		text-align: center;
		font-size: 70px;
		width: 100%;
		height: 10%;
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -30px;
		color: #fff;
		letter-spacing: 15px;
		text-shadow: 0 5px 5px #000;
		img{
			height: 100%;
		}
	}
	.login_main{
		position: absolute;
		bottom: 0;
		left: 0;
		height: 40%;
		width: 100%;
		background: rgba(0,0,0,0.5);
	}
	.form_box {
		width: 450px;
		margin: 0 auto;
		height: 100%;
		padding: 50px 0 0;
		box-sizing: border-box;
		position: relative;
	}
	.line{
		height: 50px;
		width: 100%;
		margin-bottom: 10px;
		.inp{
			width: 100%;
			height: 100%;
			line-height: 50px;
			border-radius: 30px;
			box-sizing: border-box;
			padding: 0 30px;
			background: $color-blue;
			img{
				width: 20px;
				vertical-align: middle;
			}
			input{
				width: 290px;
				border: none;
				background: none;
				padding: 0 20px;
				height: 100%;
				font-size: 16px;
				vertical-align: middle;
				color: #fff;
			}
			input::placeholder{
				color: #eee;
			}
		}
		.link{
			padding: 0 30px;
			color: #fff;
			font-size: 18px;
		}
		.btn{
			font-size: 26px;
			width: 100%;
			height: 100%;
			border-radius: 30px;
			border: none;
		}
		.copy-right{
			color: #aaa;
			text-align: center;
			font-size: 16px;
			line-height: 40px;
		}
		&:last-child{
			position: absolute;
			bottom: 0;
			left: 0;
			height: 40px;
			line-height: 40px;
			margin-bottom: 0;
		}
	}
</style>