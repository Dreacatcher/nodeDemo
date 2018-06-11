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
      required: true,
    },
  });
  const vResult = userSchema.validate({
    name,
  });
  console.log('user-index*************************')
  if (vResult.valid) {
    const result = await ctx.service.users.find(name);
    ctx.body = result;
    ctx.status = 200;
  } else {
    ctx.body = vResult.error;
    ctx.status = 422;
  }
};

exports.new = async () => {};
exports.create = async ctx => {
  const userSchema = AJS('userSchema', {
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  });
  const vResult = userSchema.validate(ctx.request.body);
  ctx.request.body.password = Base64.encode(md5(ctx.request.body.password))
  if (vResult.valid) {
    const result = await ctx.service.users.addUser(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  } else {
    ctx.body = vResult.error;
    ctx.status = 422;
  }
};

exports.show = async () => {};
exports.update = async ctx => {
  const userSchema = AJS('userSchema', {
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  });
  const vResult = userSchema.validate(ctx.request.body);
  // console.log(ctx.param.id);
  ctx.request.body.password = Base64.encode(md5(ctx.request.body.password));
  // ctx.request.body.id = ctx.param.id;
  if (vResult.valid) {
    const result = await ctx.service.users.updateUser(ctx.request.body);
    ctx.body = result;
  } else {
    ctx.body = vResult.error;
  }
};
exports.destroy = async ctx => {
  const userSchema = AJS('userSchema', {
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  });
  const vResult = userSchema.validate(ctx.request.body);
  ctx.request.body.password = Base64.encode(md5(ctx.request.body.password));
  if (vResult.valid) {
    const result = await ctx.service.users.deleteUser(ctx.request.body);
    ctx.body = result;
  } else {
    ctx.body = vResult.error;
  }

};