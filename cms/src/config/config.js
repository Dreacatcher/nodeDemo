
// let baseConf = {
//   name: '门店管家',
//   appName: '门店管家',
//   loginTitle: '欢迎登录门店管家',
//   prefix: 'antdAdmin',
//   footerText: '云徙科技 版权所有 © 2017',
//   iconFontUrl: '//at.alicdn.com/t/font_c4y7asse3q1cq5mi.js',
//   baseURL: 'http://192.168.33.11:8004/mocking',
//   crossDomains: [
//     'http://www.zuimeitianqi.com',
//   ],
//   //登录cookie超时 ，单位天
//   loginTimeout: 1,
//   largePageSizeList: ['10', '20', '50', '100', '200', '500'],
//   smallPageSizeList: ['10', '20', '50', '100', '200', '500'],
//   // 判断系统菜单是否分层级
//   isHierarchy: true,
//   //判断是否读取本地菜单
//   needLogin: false,
//   // needTempUserAuthFlag: true,
//   // 默认路由
//   homePath: '/merchantMgmt/businessmanHome',
//   // 登录后是否跳转
//   isRedirect: true,
//   // 是否需要切换组织
//   isSwitchOrg: true,
//   //应用id
//   applicationId: 6,
//   //appid
//   appId: 6,
//   //商户appid
//   sellerAppId: 2,
//   //库存appid
//   invAppId: 6,
//   //是否需要消息通知
//   needMsgNotify: false,
//   //统一配置auth
//   cookie: {
//     auth: 'auth_store',
//     user_name: 'user_name_store'
//   },
//   // 默认模拟菜单权限
//   defaultAuthMenu: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17"],
//   //列表页一些配置
//   listConfig: {
//     //表格是否添加滚动条td上限
//     scrollTd:5,
//     //表格滚动配置
//     tableScroll: {x: 1200},
//     //处理表格是否有滚动条
//     tableTdLength:e=>{
//       let scroll = {};
//       if(e.length > baseConf.listConfig.scrollTd){
//         scroll = {x:1200};
//       }
//       //return scroll;
//       return {};
//     },
//     //处理表格头部信息
//     columns:e=>{
//       let widthName = {
//         //日期
//         "time":"150px",
//         //手机
//         "phone":"115px",
//       };
//       e.map(item=>{
//         //如果是日期，宽度100
//         for(let i in widthName){
//           if(item["name"] == i){
//             item.width = widthName[i];
//           }
//         };
//         if(item["title"] == "序号"){
//           item.width = "65px";
//           if(!item.className)
//           item.className='txtcenter';
//           else
//             item.className +=' txtcenter';
//         }
//       });
//       return e;
//     },
//     //搜索框布局
//     searchCol: {
//       xs: {span: 24},
//       md: {span: 12},
//       lg: {span: 8},
//       xl: {span: 6}
//     },
//     searchFormItem: {
//       labelCol: {span: 8},
//       wrapperCol: {span: 16}
//     }
//   },
//   // 地图信息
//   mapCfg: {
//     // web服务Key
//     // webServkey: '07b509e28fa78924522ad3334a944f2a',
//     webServkey: 'cab8a7b0e96afa1ed91c1eead856f6de',
//     //webServkey: 'ea16110996969c8eeade5c5a63865090',

//     // web端key(js api)
//     // webJsKey: '9b0c73b9e853433c4e05a54ecb40b127'
//     webJsKey: '4196655e6f505990ef6950ee4916c5ce'
//     //webJsKey: 'fe3058d01bc55b2acb68783e3f7778b1'
//   },
//   //api 模块名
//   comp: 'inventory',
//   //todo: 临时菜单权限改为固定，因为全局管理设计问题，导致用户菜单无法动态获取
//   //needTempUserAuthFlag: true,
//   //请求超时时间设置，10s
//   axiosTimeout: 10000,
//   //系统是否请求用户是否拥有经理角色
//   isDirector: true,
//   directorBtnName: '进货管理',
//   //拥有经理角色用户的专属key值
//   directorKey: '169AC624-DBF1-443E-8DCB-91099C4A31D6',
//   //拥有经理角色用户的跳转地址
//   directorHref: 'http://b2b.emaotai.cn/b2b/ele-business/BtoB/moutairegtest.asp',
//   // 扫码购页面的地址
//   scavengUrl: '/smartsales-o2o-h5/#/scanShoppingDetail',
//   // 是否开启清分按钮
//   isQingfen: true,
//   qingFenBtnName: '货款提现',
//   // 门店管家用户操作指导手册
//   isShowOpsGuidance: false, // 上线放开
// }
// if ('dev' === '' + ENV || 'development' === '' + ENV || 'yunxi-dev' === '' + ENV) {
//   // baseConf.baseURL = 'http://test.dtyunxi.cn:8300';
//   baseConf.baseURL = 'http://dev.dtyunxi.cn:8310';
//   baseConf.name = baseConf.name + ' YX(开发环境)';
//   baseConf.pointUrl = 'https://dev.dtyunxi.cn:8310';
//   // 新增店铺时候的默认图标
//   baseConf.shopIcoeUrl = 'https://xl-dev.oss-cn-shenzhen.aliyuncs.com/supplychain-dev/test/cresteShop/nhdmatWz6C.jpg';
//   // 清分系统地址
//   baseConf.qingFenUrl = 'http://106.15.28.53:9401/login.html?';
// } else if ('test' === '' + ENV || 'yunxi-test' === '' + ENV) {
//   baseConf.baseURL = 'http://test.dtyunxi.cn:8300';
//   baseConf.name = baseConf.name + ' YX(测试环境)';
//   baseConf.pointUrl = 'http://test.dtyunxi.cn:8300';
//   // 新增店铺时候的默认图标
//   baseConf.shopIcoeUrl = 'https://xl-test.oss-cn-shenzhen.aliyuncs.com/supplychain-dev/test/cresteShop/npWxFTtHzh.jpg';
//   // 清分系统地址
//   baseConf.qingFenUrl = 'http://106.15.28.53:9401/login.html?';
// } else if ('apaas' === '' + ENV || 'yunxi-apaas' === '' + ENV) {
//   baseConf.baseURL = 'http://47.106.59.181';
//   baseConf.name = baseConf.name + ' YX(演示环境)';
//   baseConf.pointUrl = 'http://47.106.59.181';
//   // 清分系统地址
//   baseConf.qingFenUrl = 'http://106.15.28.53:9401/login.html';
// }else if ('stage' === '' + ENV || 'yunxi-stage' === '' + ENV) {
//   baseConf.baseURL = 'https://stg.xl.dtyunxi.com';
//   baseConf.name = baseConf.name + ' YX(预生产环境)';
//   baseConf.pointUrl = 'https://stg.xl.dtyunxi.com';
//   // 新增店铺时候的默认图标
//   baseConf.shopIcoeUrl = 'https://zn-image.oss-cn-shenzhen.aliyuncs.com/supplychain-dev/test/cresteShop/JxhKrc7rhW.jpg';
//   // 清分系统地址
//   baseConf.qingFenUrl = 'http://106.15.28.53:9401/login.html?';
// } else if ('mttest' === '' + ENV || 'yunxi-test' === '' + ENV) {
//   baseConf.baseURL = 'https://test-store.cmaotai.net';
//   baseConf.name = baseConf.name + ' (测试环境)';
//   baseConf.pointUrl = 'https://dev-b2c.cmaotai.net';
//   // 新增店铺时候的默认图标
//   baseConf.shopIcoeUrl = 'https://maotai-test.oss-cn-hangzhou.aliyuncs.com/supplychain-dev/test/cresteShop/F43FQmePsW.jpg';
//   // 清分系统地址
//   baseConf.qingFenUrl = 'http://106.15.28.53:9401/login.html?';
// } else if ('mtdev' === '' + ENV || 'yunxi-mtdev' === '' + ENV) {
//   baseConf.baseURL = 'https://dev-b2c.cmaotai.net';
//   baseConf.name = baseConf.name + ' (开发环境)';
//   baseConf.pointUrl = 'https://test-seller.cmaotai.net';
// }else if ('xlpoc' === '' + ENV || 'yunxi-xlpoc' === '' + ENV) {
//   baseConf.pointUrl = 'https://stg.xl.dtyunxi.com';
//   baseConf.baseURL = 'https://poc.xl.dtyunxi.com';
//   baseConf.name = baseConf.name + '（POC测试环境）';
//   baseConf.nameSuffix = '（POC测试环境）';
// }else if ('mtprod' === '' + ENV || 'yunxi-mtprod' === '' + ENV) {
//   baseConf.pointUrl = 'https://stg.xl.dtyunxi.com';
//   baseConf.baseURL = 'https://store.cmaotai.com';
//   baseConf.name = baseConf.name + '（生产环境）';
//   baseConf.nameSuffix = '（生产环境）';
//   // 清分系统地址
//   baseConf.qingFenUrl = 'http://118.31.50.134:11050/login.html?';
// }else if ('mtprodpoc' === '' + ENV || 'yunxi-mtprodpoc' === '' + ENV) {
//   baseConf.pointUrl = 'https://stg.xl.dtyunxi.com';
//   baseConf.baseURL = 'https://prod-store.cmaotai.com';
//   baseConf.name = baseConf.name + '（生产环境）';
//   baseConf.nameSuffix = '（生产环境）';
//   // 清分系统地址
//   baseConf.qingFenUrl = 'http://118.31.50.134:11050/login.html?';
// }else if ('mtstage' === '' + ENV || 'yunxi-mtstage' === '' + ENV) {
//   baseConf.pointUrl = 'https://stg.xl.dtyunxi.com';
//   baseConf.baseURL = 'https://stage-store.cmaotai.net';
//   baseConf.name = baseConf.name + '（茅台正式预生产环境）';
//   baseConf.nameSuffix = '（茅台正式预生产环境）';
//   // 清分系统地址
//   baseConf.qingFenUrl = 'http://118.31.50.134:11050/login.html?';
// }
// baseConf.ENV = ENV
// module.exports = baseConf
