import axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
import lodash from 'lodash'
import { message } from 'antd'
import config from '../config/config'
import pathConfig from '../config/path.config.js'

const fetch = (options) => {
	console.log(options)
	let {
		method = 'POST',
		headers,
		timeout = config.axiosTimeout || 5000,
		// auth = Cookie.get(config.auth) || ''
		auth = '',
		body,
		url
	} = options
	headers = {
		...headers,
		auth,
		'Cache-Control': 'no-cache',
		Pragma: 'no-cache',
		'Content-type': 'application/x-www-form-urlencoded',
		Expires: -1,
		Flag: 1,
		'x-csrf-token': 'RlYx9HdOH00vcE6XhGWzN0vk'
	}
	const cloneData = lodash.cloneDeep(body)
	try {
		if (!url.match(/[a-zA-z]+:\/\/[^/]*/)) {
			url = pathConfig(url)
		}
	} catch (e) {
		message.error(e.message)
	}
	if (method === 'JSONP') {
		return new Promise((resolve, reject) => {
			jsonp(
				url,
				{
					param: `${qs.stringify(body)}&callback`,
					name: `jsonp_${new Date().getTime()}`,
					timeout: timeout
				},
				(error, result) => {
					if (error) {
						reject(error)
					}
					resolve({
						statusText: 'OK',
						status: 200,
						data: result
					})
				}
			)
		})
	}
	// 转化参数
	const before = function(params) {
		return qs.stringify(params)
	}
	switch (method.toLowerCase()) {
		case 'get':
			return axios.get(url, {
				params: cloneData
			})
		case 'delete':
			return axios.delete(url, {
				data: cloneData
			})
		case 'post':
			// axios.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded'
			return axios.post(url, before(body), {
				headers,
				timeout,
				withCredentials: false
			})
		case 'put':
			return axios.put(url, cloneData)
		case 'patch':
			return axios.patch(url, cloneData)
		default:
			return axios(options)
	}
}

const loginOut = (code) => {
	switch (code) {
		case 108:
			message.error('登录超时，请重新登录')
			//清除所有cookie
			//跳转至登录页面
			break
		case 200:
			break
		default:
			//清除所有cookie
			break
	}
}

export default function request(options) {
	return fetch(options)
		.then((response) => {
			loginOut(response.status)
			return response
		})
		.catch((error) => {
			const { response } = error
			let msg
			let status
			let otherData = {}
			if (response) {
				const { data, statusText } = response
				otherData = data
				status = response.status
				msg = data.message || statusText
			} else {
				status = 600
				msg = 'Network Error'
			}
			return {
				success: false,
				status,
				message: msg,
				...otherData
			}
		})
}
