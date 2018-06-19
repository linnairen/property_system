import axios from 'axios'
import { reqs_auth_get } from '../common/js/requires'


export const passMineInfo = ({ commit }, payload) => {
    commit('MINEINFO', payload)
}

export const passToken = ({ commit }) => {
	let token = localStorage.getItem('skytkn'),
		params = {};
	if(token){
		params.token = token;
		axios.defaults.headers['skytkn'] = token;
	}
	return reqs_auth_get.getToken({
		clientType: 5,
		systemType: 4
	}).then(res => {
		if(res.code == 200){
			commit('TOKEN', res.rs.token);
			axios.defaults.headers['skytkn'] = res.rs.token;
			localStorage.setItem('skytkn',res.rs.token);
		}
	})
}