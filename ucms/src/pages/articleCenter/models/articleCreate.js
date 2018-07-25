import { createArticle } from '../services/articleCreate'
// import { auth } from '../../../config/config'
// import { notification } from 'antd'
// import Cookies from 'js-cookie'
// import { routerRedux } from 'dva/router'
export default {
	namespace: 'createArticleModel',
	state: {
		articleParam: {
			title: '',
			cont: '',
			author: ''
		},
		editorContent: '',
		editorStates: ''
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
		*createArticle({ payload: articleParam }, { call, put }) {
			console.log(articleParam)
			debugger
			const result = yield call(createArticle, articleParam)
			console.log(result)

			// if (result.data.status === 200 && result.data.data.token) {
			// 	console.log(result)
			// 	yield put({
			// 		type: 'updateStates',
			// 		payload: {
			// 			articleListData: result
			// 		}
			// 	})
			// } else {
			// 	notification.open({
			// 		message: '温馨提示',
			// 		description: result.data.data.message
			// 	})
			// }
		}
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				// if (pathname === '/articleCenter/articleList') {
				// }
			})
		}
	}
}
