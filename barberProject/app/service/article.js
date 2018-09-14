'use strict'
const Service = require('egg').Service
/** */
const ran = () => {
	const num = new Date().getTime()
	return num.toString().substring(0, 16) + parseInt(Math.round(Math.random() * 30 + 100))
}
class ArticleService extends Service {
	async find(title) {
		let results
		if (title) {
			// 假如 我们拿到用户 title 从数据库获取用户详细信息
			results = await this.app.mysql.get('article', {
				title
			})
		} else {
			results = await this.app.mysql.select('article')
		}
    return results
	}
	async insert(param) {
		let result = {}
		// 假如 我们拿到用户 id 从数据库获取用户详细信息
		const insertResult = await this.app.mysql.insert('article', param)
		const insertSuccess = insertResult.affectedRows === 1
		if (!insertSuccess) {
			result = {
        message: '文章创建失败',
        code: 0,
				data: insertSuccess
			}
		} else {
			result = {
        message: '文章创建成功',
        code: 1,
				data: 'success'
			}
		}
		return result
	}
	async updateUser(param) {
		let result = {}
		console.log('service-updateUser*************************')
		console.log(param)
		const hasName = await this.app.mysql.get('user', {
			username: param.username
		})
		hasName.updatetime = this.app.mysql.literals.now
		console.log(hasName)
		console.log('service-updateUser-find*************************')
		// 假如 我们拿到用户 id 从数据库获取用户详细信息
		if (hasName && hasName.username) {
			const insertResult = await this.app.mysql.update('user', param)
			const insertSuccess = insertResult.affectedRows === 1
			if (!insertSuccess) {
				result = {
					message: '更新失败',
					data: insertSuccess,
					status: 500
				}
			} else {
				result = {
					message: '更新成功',
					data: 'null',
					status: 200
				}
			}
		} else {
			result = {
				message: '用户不存在',
				data: 'null'
			}
		}
		return result
	}
	async deleteUser(param) {
		let result = {}
		console.log('service-deleteUser*************************')
		console.log(param)
		const hasName = await this.app.mysql.get('user', {
			username: param.username
		})
		console.log('service-deleteUser-find*************************')
		// 假如 我们拿到用户 id 从数据库获取用户详细信息
		if (hasName && hasName.username) {
			const insertResult = await this.app.mysql.delete('user', {
				id: hasName.id
			})
			const insertSuccess = insertResult.affectedRows === 1
			if (!insertSuccess) {
				result = {
					message: '删除失败',
					data: insertSuccess
				}
			} else {
				result = {
					message: '删除成功',
					data: 'null'
				}
			}
		} else {
			result = {
				message: '用户不存在',
				data: 'null'
			}
		}
		return result
	}
}
module.exports = ArticleService
