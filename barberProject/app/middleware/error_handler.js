// app/middleware/error_handler.js
'use strict';
module.exports = () => {
  return function* (next) {
    console.log('error_handler_000000000000')
    try {
      yield next;
      console.log('error_handler__try000000000000')
      // console.log(err.errors)
    } catch (err) {
      console.log('error_handler__catch000000000000' + `${err}`)
      console.log(err.errors)
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      this.app.emit("error", err, this);
      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error =
        status === 500 && this.app.config.env === "prod" ?
        "Internal Server Error" :
        err.message;
      // 从 error 对象上读出各个属性，设置到响应中
      this.body = {
        error
      };
      if (status === 422) {
        this.body.detail = err.errors;
      }
      this.status = status;
    }
  };
};