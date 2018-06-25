import { routerRedux } from 'dva/router'
import { timestamps } from '../config/config'
// import { timestamps, auth } from '../config/config'
// import store from 'storejs'

export default {
	namespace: 'appModel',
	state: {
		isLogged: false
	},
	subscriptions: {
		setup({ dispatch, history }) {
			dispatch({
				type: 'getLoginStatus'
			})
		}
	},
	effects: {
		*getLoginStatus({ payload }, { call, put, select }) {
			// if (store.get(auth)) {
			if (true) {
				// 后期再每个接口处，把token 加载在header里，后端去读取检验token有效性，失效返回登录页
				yield put(
					routerRedux.push({
						pathname: '/',
						query: {
							key: timestamps
						}
					})
				)
				yield put({ type: 'updateState', payload: { isLogged: true } })
			} else {
				yield put(
					routerRedux.push({
						pathname: '/login',
						query: {
							key: timestamps
						}
					})
				)
				yield put({ type: 'updateState', payload: { isLogged: false } })
			}
		}
	},

	reducers: {
		updateState(state, action) {
			return {
				...state,
				...action.payload
			}
		}
	}
}