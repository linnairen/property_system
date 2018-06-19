import Vue from 'vue'
import Router from 'vue-router'

import Index from '@p/index'

import communityDefault from '@p/communityManagement/default'
import communityList from '@p/communityManagement/list'
import communityDetail from '@p/communityManagement/detail'
import communityAdd from '@p/communityManagement/add'
import communityAddStep1 from '@p/communityManagement/addStep/1'
import communityAddStep2 from '@p/communityManagement/addStep/2'
import communityAddStep3 from '@p/communityManagement/addStep/3'
import communityAddStep4 from '@p/communityManagement/addStep/4'


import chargeDefault from '@p/chargeManagement/default'
import chargeList from '@p/chargeManagement/list'
import chargeDetail from '@p/chargeManagement/detail'

import Login from '@p/login'
import Mine from '@p/mine/mine'
import setPassword from '@p/mine/setPassword'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: Index,
			children: [{
					path: '',
					redirect: 'community/',
					hidden: true
				},
				{
					path: 'community/',
					title: '小区管理',
					component: communityDefault,
					children: [{
							path: '',
							component: communityList,
						},
						{
							path: 'add/',
							component: communityAdd,
							children: [
								{
									path: '1',
									component: communityAddStep1
								},
								{
									path: '2',
									component: communityAddStep2
								},
								{
									path: '3',
									component: communityAddStep3
								},
								{
									path: '4',
									component: communityAddStep4
								}
							]
						},
						{
							path: ':tid',
							component: communityDetail,
						}
					]
				},
				{
					path: 'charge/',
					title: '收费管理',
					component: chargeDefault,
					children: [{
							path: '',
							component: chargeList,
						},
						{
							path: ':tid',
							component: chargeDetail,
						}
					]
				},
				{
					path: 'mine',
					component: Mine,
					hidden: true
				},
				{
					path: 'setPassword/',
					component: setPassword,
					hidden: true,
					children: [
						{
							path: ':isReset'
						}
					]
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})