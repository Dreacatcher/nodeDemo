// import { hashHistory } from 'dva/router'
//import { create, remove, update, query } from '../services/users';

// 处理异步请求
// import request from '../utils/request'
// import qs from 'qs'
// async function query(params) {
// 	return request(`/api/users?${qs.stringify(params)}`)
// }
export default {
	namespace: 'subSubPageModel',
	state: {
		collapsed: false
	},
	subscriptions: {
		setup({ dispatch, history }) {
			history.listen((location) => {
				if (location.pathname === '/') {
					// dispatch({
					//   type: 'query',
					//   payload: {}
					// });
				}
			})
		}
	},

	effects: {
		*query({ payload }, { select, call, put }) {
			// yield put({ type: 'showLoading' });
			// const { data } = yield call(query);
			// if (data) {
			//   yield put({
			//     type: 'querySuccess',
			//     payload: {
			//       list: data.data,
			//       total: data.page.total,
			//       current: data.page.current
			//     }
			//   });
			// }
		}
	},
	reducers: {
		showLoading(state) {
			return {
				...state,
				loading: true
			}
		}, // 控制加载状态的 reducer
		setCollapsed(state, action) {
			return {
				...state,
				...action.payload
			}
		},
		// 使用服务器数据返回
		querySuccess(state, action) {
			return {
				...state,
				...action.payload,
				loading: false
			}
		}
	}
}
