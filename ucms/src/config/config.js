/*
 * @Author: lcm 
 * @Date: 2018-06-21 14:01:58 
 * @Last Modified by: lcm
 * @Last Modified time: 2018-06-21 14:05:04
 */

let baseConf = {
  name: '门店管家',
  //统一配置auth
  cookie: {
    auth: 'auth_store',
    user_name: 'user_name_store'
  },
  //请求超时时间设置，10s
  axiosTimeout: 10000,
}
if ('dev' === '' + process.env || 'development' === '' + process.env || 'yunxi-dev' === '' + process.env) {
  // baseConf.baseURL = 'http://test.dtyunxi.cn:8300';
  baseConf.baseURL = 'http://dev.dtyunxi.cn:8310';
  baseConf.name = baseConf.name + ' YX(开发环境)';
  baseConf.pointUrl = 'https://dev.dtyunxi.cn:8310';
  // 新增店铺时候的默认图标
  baseConf.shopIcoeUrl = 'https://xl-dev.oss-cn-shenzhen.aliyuncs.com/supplychain-dev/test/cresteShop/nhdmatWz6C.jpg';
  // 清分系统地址
  baseConf.qingFenUrl = 'http://106.15.28.53:9401/login.html?';
} 
baseConf.ENV = process.env
module.exports = baseConf
