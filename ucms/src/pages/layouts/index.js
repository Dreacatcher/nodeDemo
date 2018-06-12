import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import styles from './index.less'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import menus from '../../config/menus'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
function LayoutPage({ location, dispatch, layoutModel }) {
	const { collapsed, openKeys } = layoutModel
	console.log(layoutModel)
	const toggle = () => {
		const _l = !collapsed
		dispatch({
			type: 'layoutModel/changeStates',
			payload: {
				openKeys: [],
				collapsed: _l
			}
		})
	}
	const onOpenMenusChange = (param) => {
		const latestOpenKey = param.find((key) => openKeys.indexOf(key) === -1)
		const _menusKey = menus.map((item, index) => {
			return item.key
		})
		if (_menusKey.indexOf(latestOpenKey) === -1) {
			dispatch({
				type: 'layoutModel/changeStates',
				payload: {
					openKeys: param
				}
			})
		} else {
			dispatch({
				type: 'layoutModel/changeStates',
				payload: {
					openKeys: latestOpenKey ? [ latestOpenKey ] : []
				}
			})
		}
	}
	return (
		<div className={styles.normal}>
			<Layout>
				<Header className="header">
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '2' ]} style={{ lineHeight: '64px' }}>
						<Menu.Item key="1">nav 1</Menu.Item>
						<Menu.Item key="2">nav 2</Menu.Item>
						<Menu.Item key="3">nav 3</Menu.Item>
					</Menu>
				</Header>
				<Layout>
					<Sider
						width={200}
						style={{ background: '#fff', overflow: 'hidden' }}
						trigger={null}
						collapsible
						collapsed={collapsed}
					>
						<Header
							style={{ background: '#fff', padding: 0, height: '35px', lineHeight: '35px' }}
							onClick={() => {
								toggle()
							}}
						>
							<Icon
								className="trigger"
								type={collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={() => {
									toggle()
								}}
							/>
						</Header>
						<div className="logo" />
						<Menu
							theme="dark"
							mode="inline"
							defaultSelectedKeys={[ '1' ]}
							inlineCollapsed={collapsed}
							openKeys={openKeys}
							onOpenChange={(e) => {
								onOpenMenusChange(e)
							}}
						>
							{menus.map((item) => {
								return (
									<SubMenu
										key={item.key}
										title={
											<span>
												<Icon type="team" />
												<span>{item.name}</span>
											</span>
										}
									>
										{item.children &&
											item.children.length > 0 &&
											item.children.map((subItem) => {
												return <Menu.Item key={subItem.key}>{subItem.name}</Menu.Item>
											})}
									</SubMenu>
								)
							})}
						</Menu>
					</Sider>

					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0', textAlgin: 'left' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<Content
							style={{
								background: '#fff',
								padding: 24,
								margin: 0,
								minHeight: 280,
								maxHeight: 640,
								overflow: 'scroll'
							}}
						>
							<h1 className={styles.title}>Yay! Welcome to dva!</h1>
							<div className={styles.welcome} />
							<ul className={styles.list}>
								<li>
									To get started, edit <code>src/index.js</code> and save to reload.
								</li>
								<li>
									<a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
										Getting Started
									</a>
								</li>
							</ul>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

LayoutPage.propTypes = {
	layoutModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ layoutModel }) => ({ layoutModel }))(LayoutPage)
