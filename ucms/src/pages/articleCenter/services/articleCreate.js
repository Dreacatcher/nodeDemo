import request from '../../../utils/request'

export function createArticle(params) {
	return request({
		url: '/article',
		method: 'POST',
		body: params
	})
}
