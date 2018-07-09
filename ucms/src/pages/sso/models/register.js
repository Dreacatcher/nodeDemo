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
      notification.open({
        message: '温馨提示',
        description: result.data.data.message
      })
			if (result.status === 200) {
				yield put(routerRedux.push('/sso/login'))
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
