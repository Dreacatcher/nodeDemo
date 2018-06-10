'use strict';
// ctx.request.body 是输入的 POST body
// ctx.query 才是输入的查询参数 /news?page=12 -> ctx.query.page
// ctx.param 是路由匹配的，来自于 koa-router，/users/:id -> ctx.param.id
const md5 = require('md5');
const Base64 = require('js-base64').Base64;
exports.index = async ctx => {
  // const createRule = { // 检验参数
  //   name: 'string',
  //   password: 'string',
  // }
  // ctx.validate(createRule); // 定义参数
  const _name = ctx.request.query.name;
  const _psw = md5(Base64.encode(ctx.request.query.password));
  let result = await ctx.service.users.find(_name);

  const json = {
    code: 200,
    msg: '请求成功',
    data: {
      userId: '123456 index',
      name: _name,
      psw: _psw,
      blog: 'https://yunm.coding.me',
    },
  };
  console.log('陆朝明测试111111');
  console.log(result);
  console.log('陆朝明测试2222222');
  ctx.body = result;
  ctx.status = 200;
};

exports.new = async () => {};
exports.create = async ctx => {
  const _name = ctx.request.query.name;
  const _psw = md5(Base64.encode(ctx.request.query.password));
  console.log('陆朝明测试111111');
  const result = await ctx.service.users.add(_name, _psw);
  console.log('陆朝明测试111111');
  console.log(result);
  console.log('陆朝明测试2222222');
  ctx.body = result;
  ctx.status = 200;
};

exports.show = async () => {};

exports.edit = async () => {};

exports.update = async () => {};

exports.destroy = async () => {};