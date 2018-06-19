// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/common/style/reset.css'
import 'babel-polyfill'
import '@/common/js/methods'
import '@/common/style/normal.scss'
import { IEVersion } from '@/common/js/tools.js'
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'

Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false

//等token请求到了再渲染页面
store.dispatch('passToken')
//	.then(() => {

		axios.interceptors.request.use(function(config) {
			// Do something before request is sent
			return config;
		}, function(error) {
			// Do something with request error
			return Promise.reject(error);
		});

		axios.interceptors.response.use(
			response => {
				if(response.data.code == 1402) { // 权限拦截
					Vue.$tip('缺少权限', 'error');
					router.go(-1);
				} else if(response.data.code == 1406) { // 退出登录拦截
					Vue.$tip('未登录', 'error');
					router.push('/login');
				} else if(response.data.code == 1404) { //重新获取token
					store.dispatch('passToken');
				} else if(response.data.code != 200) { //报错
					Vue.$tip(response.data.msg, 'error');
				}
				return response;
			},
			error => {
				if(error.response) {
					switch(error.response.status) {
						case 404:
							Vue.$tip('服务器炸了', 'error');
							break;
						default:
							Vue.$tip('请求出错', 'error');
					}
				}
				return Promise.reject(error.response); // 返回接口返回的错误信息
			}
		)

		/* eslint-disable no-new */
		new Vue({
			el: '#app',
			data: {
				isIE9: false
			},
			created() {
				this.isIE9 = IEVersion() == 9
			},
			router,
			store,
			components: {
				App
			},
			template: '<App/>'
		})

//	})