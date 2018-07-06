import fetch from 'dva/fetch'
// import axios from 'axios'
import config from '../config/config'
import pathConfig from '../config/path.config.js'
// import Cookie from 'cookie'

// function checkStatus(response) {
// 	let res = {}
// 	if (response.status !== 200) {
// 		res.message = response.statusText
// 		res.status = response.status
// 	}
// 	return response
// }

function setOptions(_options) {
	const {
    method = 'POST',
    url,
		headers,
		timeout = config.axiosTimeout || 5000,
		// auth = Cookie.get(config.auth) || ''
		auth = ''
	} = _options
	_options.timeout = timeout
	_options.url = pathConfig(url)
	_options.headers = {
		...headers,
		auth,
		'Cache-Control': 'no-cache',
		Pragma: 'no-cache',
		Expires: -1,
		Flag: 1,
		'x-csrf-token': 'RlYx9HdOH00vcE6XhGWzN0vk'
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
			debugger
			_options.headers['Content-type'] = 'application/x-www-form-urlencoded'
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
	return _options
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
// export default async function request(url, options) {
//   options = setOptions(options)
//   console.log(options)
//   console.log(options)
//   return await fetch(pathConfig(url), options)
//     .then((response) => {
//       return response
//     })
//     .catch((error) => {
//       console.log(error)
//       return Promise.resolve(error)
//     })
// }

// function parseJSON(response) {
// 	return response.json()
// }
export default function request(options) {
  options = setOptions(options)
  // console.log('sssssssssssssss')
  // console.log( pathConfig(url))
  // options.url = pathConfig(url)
	// return fetch(pathConfig(url), options)
	// 	.then(checkStatus)
	// 	.then(parseJSON)
	// 	.then((data) => ({ data }))
	// 	.catch((err) => ({ err }))
	return fetch(options.url,options)
		.then((response) => {
      console.log(response)
		})
		.catch((error) => {
      console.log(error)
		})
}
