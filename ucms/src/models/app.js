import { routerRedux } from 'dva/router'
// import { timestamps, auth } from '../config/config'
// import store from 'storejs'
import { auth } from '../config/config'
import Cookies from 'js-cookie'

function setTimestamps(location, dispatch) {
	const timestamps = new Date().getTime()
	if (location && !location.query.key) {
		if (location.search === '') {
			dispatch(
				routerRedux.push({
					pathname: location.pathname,
					query: {
						key: timestamps
					}
				})
			)
		} else {
			dispatch(
				routerRedux.push({
					pathname: location.pathname,
					search: location.search + '&key=' + timestamps
				})
			)
		}
	}
}
export default {
	namespace: 'appModel',
	state: {
		isLogged: false
	},
	subscriptions: {
		setup({ dispatch, history }) {
			history.listen((location) => {
				let _auth = Cookies.get(auth)
				if (!_auth || _auth === '') {
					// 后期再每个接口处，把token 加载在header里，后端去读取检验token有效性，失效返回登录页
					dispatch(
						routerRedux.push({
							pathname: '/sso/login'
						})
					)
        }
				// 监听路
				setTimestamps(location, dispatch) // 增加url时间戳
			})
		}
	},
	effects: {
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
