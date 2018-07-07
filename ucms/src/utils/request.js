import fetch from 'dva/fetch';
import pathConfig from '../config/path.config.js'
import config from '../config/config'
import { stringify } from 'qs'
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function setOptions(_options) {
	const {
    method = 'POST',
		headers,
		timeout = config.axiosTimeout || 5000,
		// auth = Cookie.get(config.auth) || ''
		auth = ''
	} = _options
	_options.timeout = timeout
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
export default async function request(options) {
  options = setOptions(options)
  options.body = stringify(options.body)
  const response = await fetch(pathConfig(options.url), options);
  checkStatus(response);
  const data = await response.json();
  const res = {
    data,
    headers: {},
  };
  if (response.headers.get('x-total-count')) {
    res.headers['x-total-count'] = response.headers.get('x-total-count');
  }
  return res;

}