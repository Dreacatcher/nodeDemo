import { routerRedux } from 'dva/router'
// import { timestamps, auth } from '../config/config'
// import store from 'storejs'

export default {
	namespace: 'appModel',
	state: {
		isLogged: false
	},
	subscriptions: {
		setup({ dispatch, location,history }) {
      console.log('11111111111')
      console.log(history)
      console.log(location)
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
				// yield put(
				// 	routerRedux.push({
				// 		pathname: '/',
				// 		query: {
				// 			key: timestamps
				// 		}
				// 	})
				// )
			
			} else {
				yield put(
					routerRedux.push({
						pathname: '/login'
					})
				)
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
