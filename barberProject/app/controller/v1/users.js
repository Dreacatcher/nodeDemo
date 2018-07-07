'use strict'
// ctx.request.body 是输入的 POST body
// ctx.query 才是输入的查询参数 /news?page=12 -> ctx.query.page
// ctx.param 是路由匹配的，来自于 koa-router，/users/:id -> ctx.param.id
const md5 = require('md5')
const Base64 = require('js-base64').Base64
var format = require('date-format')
const AJS = require('another-json-schema')
const uuidv1 = require('uuid/v1')
exports.index = async (ctx) => {
	const name = ctx.query.name
	const userSchema = AJS('userSchema', {
		name: {
			type: 'string',
			required: true
		}
	})
	const vResult = userSchema.validate({
		name
	})
	console.log('user-index*************************')
	if (vResult.valid) {
		ctx.body = await ctx.service.users.find(name)
	} else {
		ctx.body = vResult.error
	}
}

exports.new = async () => {}
exports.create = async (ctx) => {
	const userSchema = AJS('userSchema', {
		username: {
			type: 'string',
			required: true
		},
		password: {
			type: 'string',
			required: true
		},
		mobile: {
			type: 'string',
			required: true
		}
	})
	const vResult = userSchema.validate(ctx.request.body)
	console.log(ctx)
	ctx.request.body.password = Base64.encode(md5(ctx.request.body.password))
	if (vResult.valid) {
		ctx.request.body.createtime = format('yy/MM/dd hh/mm/ss', new Date())
		ctx.request.body.updatetime = format('yy/MM/dd hh/mm/ss', new Date())
		ctx.request.body.uid = uuidv1()
		ctx.body = await ctx.service.users.addUser(ctx.request.body)
	} else {
		ctx.body = vResult.error
	}
}

exports.show = async () => {}
exports.update = async (ctx) => {
	const userSchema = AJS('userSchema', {
		username: {
			type: 'string',
			required: true
		},
		password: {
			type: 'string',
			required: true
		}
	})
	const vResult = userSchema.validate(ctx.request.body)

	ctx.request.body.password = Base64.encode(md5(ctx.request.body.password))
	// ctx.request.body.id = ctx.param.id
	if (vResult.valid) {
		ctx.body = await ctx.service.users.updateUser(ctx.request.body)
	} else {
		ctx.body = vResult.error
	}
}
exports.destroy = async (ctx) => {
	const userSchema = AJS('userSchema', {
		username: {
			type: 'string',
			required: true
		},
		password: {
			type: 'string',
			required: true
		}
	})
	const vResult = userSchema.validate(ctx.request.body)
	ctx.request.body.password = Base64.encode(md5(ctx.request.body.password))
	if (vResult.valid) {
		ctx.body = await ctx.service.users.deleteUser(ctx.request.body)
	} else {
		ctx.body = vResult.error
	}
}
