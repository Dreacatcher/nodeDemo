/*
 * @Author: lcm 
 * @Date: 2018-06-26 19:23:59 
 * @Last Modified by: lcm
 * @Last Modified time: 2018-06-26 19:24:19
 */

import config from './config'
export default function setUrl(excerpt, version) {
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