/*
 * @Author: lcm 
 * @Date: 2018-06-21 14:01:58 
 * @Last Modified by: lcm
 * @Last Modified time: 2018-06-26 19:02:15
 */

let baseConf = {
  name: '后台管理系统',
  ENV: process.env.NODE_ENV,
  timestamps: new Date().getTime(), // 全局时间戳
  //统一配置auth
  auth: 'auth_store',
  //请求超时时间设置，10s
  axiosTimeout: 10000,
  logo: require('../assets/img/logo.png'),
}
if ('development' === '' + baseConf.ENV) {
  baseConf.baseURL = 'http://127.0.0.1:7001';
  baseConf.baseENV = '开发环境';
}
module.exports = baseConf
