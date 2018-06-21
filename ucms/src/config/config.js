/*
 * @Author: lcm 
 * @Date: 2018-06-21 14:01:58 
 * @Last Modified by: lcm
 * @Last Modified time: 2018-06-21 16:45:35
 */

let baseConf = {
  name: '开发关联系统',
  ENV: process.env.NODE_ENV,
  //统一配置auth
  cookie: {
    auth: 'auth_store',
    user_name: 'user_name_store'
  },
  //请求超时时间设置，10s
  axiosTimeout: 10000,
}
if ('development' === '' + baseConf.ENV) {
  baseConf.baseURL = 'http://127.0.0.1:7001';
}
module.exports = baseConf
