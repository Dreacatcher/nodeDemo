'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
	const { router, controller } = app
	// 顾客管理个人中心
	const _cmng = '/cmng-application-personal-center'
	router.resources('/users', _cmng + '/api/v1/users', controller.v1.users) //   /cmng-application-personal-center/app/api/v1/users
	/* ******************顾客管理系统个人中心***********************************/
	// router.get('/api/v1/users', controller.users.index)
	// app.get('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.index')
	// app.get('/api/table/:res',app.oAuth2Server.authenticate(), 'tableinfo.show')
	// app.post('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.create')
	// app.put('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.update')
	// app.del('/api/table/:res',app.oAuth2Server.authenticate(), 'tableinfo.destroy')
	router.resources('/article', _cmng + '/api/v1/article', controller.v1.article) //   /cmng-application-personal-center/app/api/v1/users
	app.get(_cmng + '/api/v1/login', controller.v1.users.login)
	// app.get('/api/restql/:res/:id','restql.show')
	// app.post('/api/restql/:res',app.oAuth2Server.authenticate(), 'restql.create')
	// app.put('/api/restql/:res/:id',app.oAuth2Server.authenticate(), 'restql.update')
	// app.del('/api/restql/:res/:id',app.oAuth2Server.authenticate(), 'restql.destroy')

	// app.get('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.index')
	// app.get('/api/table/:res',app.oAuth2Server.authenticate(), 'tableinfo.show')
	// app.post('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.create')
	// app.put('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.update')
	// app.del('/api/table/:res',app.oAuth2Server.authenticate(), 'tableinfo.destroy')

	// app.all('/oauth2/access_token', app.oAuth2Server.token())
	// app.post('/user/authorize', app.oAuth2Server.authenticate(), 'user.authenticate')
	// app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate')
}
