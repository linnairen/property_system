import axios from 'axios';

const baseUrl = {
	imgAddress: 'http://ovr04x0lk.bkt.clouddn.com/', //线下的公有图片上传地址
	// imgAddress: 'http://img.cheweiditu.com/', //线上的公有图片打开地址
	imagePrivate: 'http://ovr6oetrw.bkt.clouddn.com/', //私有图片上传地址
	//接口调试服务器地址为
	//登录 token
	//  武鼎本地
	// auth: 'http://192.168.11.130:8001',
	// m: 'http://192.168.11.130:8003',
	//   毅哥本地
	auth: 'http://192.168.11.138:8001',
	sys: 'http://192.168.11.138:8004',
	//  测试环境
	//  auth: 'http://192.168.11.170:8001',
	//  m: 'http://192.168.11.170:8003',
	//   正式服务器地址为
	//	 auth: 'http://auth.cheweiditu.com',
	//	 m: 'http://system.cheweiditu.com',

	// auth:'http://lb-auth.cheweiditu.com',
	// m:'http://lb-sysinter.cheweiditu.com'
};

const paths_auth_get = {
		getToken: '/skyauth/token/get.shtml',
		logout: '/skyauth/oauth/logout.shtml',
		getQiniuToken: '/skyauth/qiniu/token/get'
	},
	paths_auth_post = {
		login: '/skyauth/oauth/login.shtml?loginType=pwd'
	},
	paths_sys_get = {
		getHouseAndParkConfig: '/skyManage/community/getHouseAndParkConfig',
		getUnFinish: '/skyManage/community/getUnFinish'
	},
	path_sys_post = {
		communitySaveFirst: '/skyManage/community/saveFirst',
		communitySaveSecond: '/skyManage/community/saveSecond',
		communitySaveThird: '/skyManage/community/saveThird'
	};

var reqs_auth_get = { },reqs_auth_post = { },reqs_sys_get = {},reqs_sys_post = {};

for(let i in paths_auth_get) {
	reqs_auth_get[i] = function(params) {
		return axios.get(baseUrl.auth + paths_auth_get[i], { params: params }).then(res => res.data);
	}
}
for(let j in paths_auth_post) {
	reqs_auth_post[j] = function(params) {
		return axios.post(baseUrl.auth + paths_auth_post[j], params).then(res => res.data);
	}
}
for(let i in paths_sys_get) {
	reqs_sys_get[i] = function(params) {
		return axios.get(baseUrl.auth + paths_sys_get[i], { params: params }).then(res => res.data);
	}
}
for(let j in path_sys_post) {
	reqs_sys_post[j] = function(params) {
		return axios.post(baseUrl.auth + path_sys_post[j], params).then(res => res.data);
	}
}

export {  
	baseUrl,
	reqs_auth_get,
	reqs_auth_post,
	reqs_sys_get,
	reqs_sys_post
};
