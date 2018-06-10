'use strict';
// ctx.request.body 是输入的 POST body
// ctx.query 才是输入的查询参数 /news?page=12 -> ctx.query.page
// ctx.param 是路由匹配的，来自于 koa-router，/users/:id -> ctx.param.id
const md5 = require('md5');
const Base64 = require('js-base64').Base64;
const AJS = require('another-json-schema')
exports.index = async ctx => {
  const name = ctx.query.name;
  const userSchema = AJS('userSchema', {
    name: {
      type: 'string',
      required: true
    },
  })
  const vResult = userSchema.validate({
    name,
  })
  console.log('1*************************')
  if (vResult.valid) {
    let result = await ctx.service.users.find(name);
    if (result) {
      ctx.body = result;
    } else {
      ctx.body = {};
    }
    ctx.status = 200;
  } else {
    ctx.body = vResult.error;
    ctx.status = 422;
  }
};

exports.new = async () => {};
exports.create = async ctx => {
  const _name = ctx.request.query.name;
  const _psw = md5(Base64.encode(ctx.request.query.password));
  const _id = ctx.request.query.id;
  console.log('陆朝明测试111111');
  const result = await ctx.service.users.add(_name, _psw, _id);
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