'use strict';
const Service = require('egg').Service;
// const userSqlMap = require('../sql/users');

class UserService extends Service {
  async find(name) {
    console.log('2*************************');
    console.log(name);
    // const user = await this.app.mysql.query('select * from user');
    const user = await this.app.mysql.get('user', {
      username: name,
    });
    return user;
  };
  async addUser(param) {
    console.log('service-add*************************');
    const hasName = await this.app.mysql.get('user', {
      username: param.username,
    });
    console.log(hasName);
    console.log('service-add-find*************************');
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    if (hasName && hasName.id) {
      return false
    } else {
      const result = await this.app.mysql.insert('user', param);
      const insertSuccess = result.affectedRows === 1;
      console.log('service-add*************************' + `${param}` + `${insertSuccess}`)
      if (insertSuccess) {
        return result;
      }
    }

  };

}
module.exports = UserService;