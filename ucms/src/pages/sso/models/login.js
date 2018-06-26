// import { create } from '../services/login'

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
		// *fetch({ payload: { page = 1 } }, { call, put }) {
		// 	const { data, headers } = yield call(fetch, { page })
		// 	yield put({
		// 		type: 'save',
		// 		payload: {
		// 			data,
		// 			total: parseInt(headers['x-total-count'], 10),
		// 			page: parseInt(page, 10)
		// 		}
		// 	})
		// }
		// *remove({ payload: id }, { call, put, select }) {
		//   yield call(remove, id);
		//   const page = yield select(state => state.users.page);
		//   yield put({ type: 'fetch', payload: { page } });
		// },
		// *patch({ payload: { id, values } }, { call, put, select }) {
		//   yield call(patch, id, values);
		//   const page = yield select(state => state.users.page);
		//   yield put({ type: 'fetch', payload: { page } });
		// },
		// *create({ payload: values }, { call, put, select }) {
		//   yield call(create, values);
		//   const page = yield select(state => state.users.page);
		//   yield put({ type: 'fetch', payload: { page } });
		// },
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
