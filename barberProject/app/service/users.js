'use strict'
const Service = require('egg').Service
const ran = () => {
  const num = new Date().getTime()
  return num.toString().substring(0, 16) + parseInt((Math.round(Math.random() * 30 + 100)))
}
class UserService extends Service {
  async find(name) {
    console.log('2*************************')
    console.log(name)
    // const user = await this.app.mysql.query('select * from user')
    const user = await this.app.mysql.get('user', {
      username: name
    })
    return {
      message: '',
      data: user
    }
  }
  async addUser(param) {
    let result = {}
    console.log(ran())
    param.userid = ran()
    param.createtime = this.app.mysql.literals.now
    console.log('service-add*************************')
    console.log(param)
    const hasName = await this.app.mysql.get('user', {
      username: param.username
    })
    console.log(hasName)
    console.log('service-add-find*************************')
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    if (hasName && hasName.id) {
      result = {
        message: '用户已经存在',
        data: 'null'
      }
    } else {
      const insertResult = await this.app.mysql.insert('user', param)
      const insertSuccess = insertResult.affectedRows === 1
      if (!insertSuccess) {
        result = {
          message: '注册失败',
          data: insertSuccess
        }
      } else {
        result = {
          message: '注册成功',
          data: 'null'
        }
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
      const insertResult = await this.app.mysql.update('user', hasName)
      const insertSuccess = insertResult.affectedRows === 1
      if (!insertSuccess) {
        result = {
          message: '更新失败',
          data: insertSuccess
        }
      } else {
        result = {
          message: '更新成功',
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
module.exports = UserService