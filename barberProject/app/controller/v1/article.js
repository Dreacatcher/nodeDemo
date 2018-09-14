'use strict'
// ctx.request.body 是输入的 POST body
// ctx.query 才是输入的查询参数 /news?page=12 -> ctx.query.page
// ctx.param 是路由匹配的，来自于 koa-router，/users/:id -> ctx.param.id
const md5 = require('md5')
const Base64 = require('js-base64').Base64
var format = require('date-format')
const AJS = require('another-json-schema')
const uuidv1 = require('uuid/v1')
const { resultValidate } = require('../../utils/validate')
exports.index = async (ctx) => {
	const name = ctx.query.name
	// const articleSchema = AJS('articleSchema', {
	// 	name: {
	// 		type: 'string',
	// 		required: true
	// 	}
	// })
	// const vResult = articleSchema.validate({
	// 	name
	// })
	console.log('user-index*************************')
 let _result = await ctx.service.article.find()
  ctx.body = resultValidate(_result)
}

exports.new = async () => {}
exports.create = async (ctx) => {
	const articleSchema = AJS('articleSchema', {
		title: {
			type: 'string',
			required: true
		},
		cont: {
			type: 'string',
			required: true
		},
		author: {
			type: 'string',
			required: true
		}
	})
	const vResult = articleSchema.validate(ctx.request.body)

	if (vResult.valid) {
		ctx.request.body.createtime = format('yy/MM/dd hh/mm/ss', new Date())
		ctx.request.body.updatetime = format('yy/MM/dd hh/mm/ss', new Date())

		ctx.request.body.aid = new Date().getTime()
		console.log('***************')
		console.log(ctx.request.body)
		// 根据name查询是否存在
		let _result = {}
		_result = await ctx.service.article.find(ctx.request.body.title)
		if (_result.data == null) {
			ctx.body = await ctx.service.article.insert(ctx.request.body)
		} else {
			ctx.body = {
				data: 'error',
				code: 0,
				message: '该文章已经存在'
			}
		}
		console.log('_result------_result------_result------_result')
		console.log(_result.data == null)
	} else {
		ctx.body = {
			data: null,
			message: JSON.stringify(vResult.error)
		}
		ctx.status = 400
		ctx.message = JSON.stringify(vResult.error)
	}
}

exports.show = async () => {}
exports.login = async (ctx) => {
	const articleSchema = AJS('articleSchema', {
		username: {
			type: 'string',
			required: true
		},
		password: {
			type: 'string',
			required: true
		}
	})
	const vResult = articleSchema.validate(ctx.query)
	ctx.query.password = Base64.encode(md5(ctx.query.password))
	if (vResult.valid) {
		let result = await ctx.service.users.find(ctx.query.username)
		if (result.data.password === ctx.query.password) {
			const token = md5(ctx.query.password + md5(ctx.query.username))
			result.data.token = token
			let updateResult = await ctx.service.users.updateUser(result.data)
			if (updateResult.status === 200) {
				ctx.body = {
					data: 'null',
					token,
					message: '登陆成功'
				}
			} else {
				ctx.body = {
					data: 'null',
					message: '登陆失败'
				}
				ctx.status = 500
			}
		} else {
			ctx.body = {
				data: 'null',
				message: '密码错误'
			}
		}
	} else {
		ctx.body = {
			data: null,
			message: JSON.stringify(vResult.error)
		}
		ctx.status = 400
		ctx.message = JSON.stringify(vResult.error)
	}
}
exports.update = async (ctx) => {
	const articleSchema = AJS('articleSchema', {
		username: {
			type: 'string',
			required: true
		},
		password: {
			type: 'string',
			required: true
		}
	})
	const vResult = articleSchema.validate(ctx.request.body)

	ctx.request.body.password = Base64.encode(md5(ctx.request.body.password))
	// ctx.request.body.id = ctx.param.id
	if (vResult.valid) {
		ctx.body = await ctx.service.users.updateUser(ctx.request.body)
	} else {
		ctx.body = vResult.error
	}
}
exports.destroy = async (ctx) => {
	const articleSchema = AJS('articleSchema', {
		username: {
			type: 'string',
			required: true
		},
		password: {
			type: 'string',
			required: true
		}
	})
	const vResult = articleSchema.validate(ctx.request.body)
	ctx.request.body.password = Base64.encode(md5(ctx.request.body.password))
	if (vResult.valid) {
		ctx.body = await ctx.service.users.deleteUser(ctx.request.body)
	} else {
		ctx.body = vResult.error
	}
}
