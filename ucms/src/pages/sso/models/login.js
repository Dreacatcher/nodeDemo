import { login } from '../services/login'
import { auth } from '../../../config/config'
import { notification } from 'antd'
import Cookies from 'js-cookie'
import { routerRedux } from 'dva/router'
export default {
	namespace: 'loginModel',
	state: {},
	reducers: {
		updateStates(state, action) {
			return {
				...state,
				...action.payload
			}
		}
	},
	effects: {
		*login({ payload: values }, { call, put }) {
			const result = yield call(login, values)
			Cookies.set(auth, result.data.data.token, { expires: 1 })
			if (result.data.status === 200 && result.data.data.token && result.data.data.token != '') {
				
			}
		}
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				// if (pathname === '/sso' || pathname === '/sso/login') {
				// 	dispatch({ type: 'fetch', payload: query })
				// }
				console.log('ssss')
			})
		}
	}
}
