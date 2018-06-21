import fetch from 'dva/fetch'
import config from '../config/config'
import Cookie from 'cookie'

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	}
	const error = new Error(response.statusText)
	error.response = response
	throw error
}
function setUrl(excerpt, version) {
	version = version ? version : 'v1'
	let apiUrl = ''
	let appName = ''
	if (excerpt.indexOf('/users') >= 0) {
		appName = '/cmng-application-personal-center'
	}
	if (excerpt.indexOf('http' || 'https') >= 0) {
		apiUrl = excerpt
	} else {
		apiUrl = config.baseURL + appName + '/api/' + version + excerpt
	}
	return apiUrl
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
	const {
		method = 'post',
		headers,
		timeout = config.axiosTimeout || 5000,
		auth = Cookie.get(config.cookie.auth)
	} = options

	fetch.timeout = timeout
	fetch.headers = {
		...headers,
		auth,
		'Cache-Control': 'no-cache',
		Pragma: 'no-cache',
		Expires: -1,
		Flag: 1
	}
	switch (method.toLowerCase()) {
		case 'get':
			console.log('get')
			break
		case 'delete':
			console.log('delete')
			break
		case 'head':
			console.log('head')
			break
		case 'post':
			console.log('post')
			break
		case 'put':
			console.log('put')
			break
		case 'patch':
			// return await fetch(url, options);
			console.log('patch')
			break
		default:
			console.log('default')
			break
	}
	const response = await fetch(setUrl(url), options)
	console.log(options)
	checkStatus(response)
	const data = await response.json()
	const ret = {
		data
	}
	return ret
}
