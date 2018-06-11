'use strict';
module.exports = (ctx, next) => {
  // 参数处理
  return function* apiWrapperMiddleware(next) {
    if (this.method == 'OPTIONS') {
      this.set('Access-Control-Allow-Origin', '*');
      this.set(
        'Access-Control-Allow-Methods',
        'POST, GET, PUT, DELETE, OPTIONS'
      );
      this.set('Access-Control-Allow-Credentials', false);
      this.set('Access-Control-Max-Age', '86400'); // 24 hours
      this.set(
        'Access-Control-Allow-Headers',
        'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
      );
      this.status = 200;
      return;
    }
    
    // 统一处理错误和其他通用封装
    try {
      yield next;
      console.log('api_wrapper_try*************************')
    } catch (err) {
      console.log('api_wrapper_catch*************************'+`${err}`)
      this.body = {
        message: err.message
      };
      this.status = 500;
    }
  };
};