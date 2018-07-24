let menus = [
	{
		key: '1',
		name: '会员管理',
		icon: 'setting',
		children: [
			{
				key: '11',
				name: '会员列表',
				icon: 'switcher',
				router: '/users/userList'
			},
			{
				key: '12',
				name: '会员等级设置',
				icon: 'switcher',
				router: '/users/userEdit'
			}
		]
	},
	{
		key: '2',
		name: '产品管理',
		icon: 'setting',
		children: [
			{
				key: '21',
				name: '产品列表',
				icon: 'switcher',
				router: '/productsCenter/productsList'
			},
			{
				key: '22',
				name: '新建产品',
				icon: 'switcher',
				router: '/productsCenter/productsCreate'
			}
		]
	},
	{
		key: '3',
		name: '文章管理',
		icon: 'setting',
		children: [
			{
				key: '31',
				name: '文章列表',
				icon: 'switcher',
				router: '/articleCenter/articleList'
			},
			{
				key: '32',
				name: '新建文章',
				icon: 'switcher',
				router: '/articleCenter/articleCreate'
			}
		]
	},
	{
		key: '4',
		name: '图表',
		icon: 'setting',
		children: [
			{
				key: '41',
				name: '图表',
				icon: 'switcher',
				router: '/echart'
			}
		]
	},

	{
		key: '5',
		name: '系统设置',
		icon: 'setting',
		children: [
			{
				key: '51',
				name: '角色管理',
				icon: 'switcher',
				router: '/sysManage/roleList'
			},
			{
				key: '52',
				name: '系统用户管理',
				icon: 'switcher',
				router: '/sysManage/sysUserList'
			}
		]
	}
]
export default menus
