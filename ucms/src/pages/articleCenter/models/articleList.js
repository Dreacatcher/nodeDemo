import { getArticleList } from '../services/articleList'
// import { auth } from '../../../config/config'
import { notification } from 'antd'
// import Cookies from 'js-cookie'
// import { routerRedux } from 'dva/router'
export default {
	namespace: 'articleListModel',
	state: {
		articleListData: []
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
		*articleList({ payload: values }, { call, put }) {
			const result = yield call(getArticleList, values)
			if (result.status === 200) {
				console.log(result)
				yield put({
					type: 'updateStates',
					payload: {
						articleListData: result.data.data.data
					}
				})
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
				if (pathname === '/articleCenter/articleList') {
					dispatch({ type: 'articleList', payload: {} })
				}
			})
		}
	}
}
