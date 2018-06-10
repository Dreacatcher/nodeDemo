'use strict';
const Service = require('egg').Service;
// const userSqlMap = require('../sql/users');

class UserService extends Service {
  constructor(ctx) {
    super(ctx)
  };
  * add(name, password, id) {
    console.log('service*************************')
    console.log(name)
    console.log(password)
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const result = yield this.app.mysql.insert('user', {
      name,
      id,
      password,
    });
    const insertSuccess = result.affectedRows === 1;
    if (insertSuccess) {
      return result;
    }
  };
  async find(name) {
    console.log('2*************************')
    console.log(name)
    // const totalsql = "select * from user";
    const user = await this.app.mysql.get('user', {
      username: name,
    });
    return user;
  };
}
module.exports = UserService;