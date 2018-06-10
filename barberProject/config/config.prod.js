'use strict'
// mysql配置文件
exports.mysql = {
  // database configuration
  client: {
    // host
    host: 'localhost',
    // port
    port: '3306',
    // username
    user: 'root',
    // password
    password: '831015',
    // database
    database: 'BarberDb',    
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};