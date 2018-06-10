'use strict';
exports.userSqlMap = {
  add: 'insert into user(name, password) values(?, ?)',
  deleteById: 'delete from user where id = ?',
  update: 'update user set name=?, password=? where id=?',
  list: 'select * from user',
  getById: 'select * from name where id = ?',
};