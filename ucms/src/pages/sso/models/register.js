import { create } from '../services/register'

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
