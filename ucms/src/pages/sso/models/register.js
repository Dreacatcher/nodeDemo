import { create } from '../services/register'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
export default {
	namespace: 'registerModel',
	state: {
		confirmDirty: false,
		autoCompleteResult: [],
		password: '',
		username: '',
		mobile: ''
	},
	reducers: {
		updateStates(state, action) {
			return {
				...state,
				...action.payload
			}
		}
	},
	effects: {
		*create({ payload: values }, { call, put, select }) {
			let result = yield call(create, values)
			console.log(result)
			if (result.status === 200) {
				notification.open({
					message: '温馨提示',
					description: result.data.data.message
				})
				yield put(routerRedux.push('/sso/login'))
			} else {
				notification.open({
					message: '温馨提示',
					description: result.data.data.message
				})
			}
		}
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				// if (pathname === '/sso') {
				//   dispatch({ type: 'fetch', payload: query });
				// }
			})
		}
	}
}
