import request from '../../../utils/request'

export function getArticleList(params) {
	return request({
		url: '/article',
		method: 'GET',
		body: params
	})
}
