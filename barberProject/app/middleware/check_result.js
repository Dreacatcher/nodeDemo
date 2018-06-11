'use strict';
module.exports = (status, message, data) => {
  // 参数处理
  console.log('check_result*************************');
  return function* () {
    // 统一处理返回参数格式
    this.status = status;
    this.result.message = message;
    this.result.data = data;
  };
};
