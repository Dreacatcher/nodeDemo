/*
 * @Author: lcm 
 * @Date: 2018-06-21 14:01:58 
 * @Last Modified by: lcm
 * @Last Modified time: 2018-07-09 15:32:55
 */

let baseVerify = {
  emeilReg: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  pswReg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
  mobileReg: /^[0-9]{11}$/,
  userNameReg: /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/
}

module.exports = baseVerify