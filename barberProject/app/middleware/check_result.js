'use strict';
module.exports = (ctx,result) => {
  // 参数处理
  console.log('31*************************')
    console.log(result)
  return function* checkResultMiddleware() {
    // 统一处理返回参数格式
    console.log('32*************************')
    console.log(result)
    if (result) {
      this.status = 200;
      this.result.message = '获取数据成功';
      this.result.data = result;
    }else{
      this.status = 200;
      this.result.message = '暂无数据';
      this.result.data = {};
    }
  };
};