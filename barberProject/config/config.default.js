'use strict'

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528474957031_2424'

  // add your config here
  config.middleware = ['robot', 'errorHandler', 'apiWrapper', 'gzip']
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: '/api'
  }
  // middleware config
  config.robot = {
    ua: [/curl/i, /Baiduspider/i]
  }
  config.gzip = {
    threshold: 1024
  }
  config.security = {
    csrf: {
      enable: false,
      headerName: 'csrftoken',
      ignoreJSON: false // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: ['http://127.0.0.1:7001/,http://localhost:8000/,http://127.0.0.1:8000/']
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,OPTIONS,POST,DELETE,PATCH',
    credentials: true
  }
  config.xframe = {
    enable: false
  }

  config.multipart = {
    fileExtensions: ['.xls', '.doc', '.ppt', '.docx', '.xlsx', '.pptx']
  }
  // config.proxyworker = {
  //   port: 10086
  // }
  return config
}