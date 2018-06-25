import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import styles from './index.less'
import { Layout, Menu, Icon } from 'antd'
import menus from '../../config/menus'
import Link from 'umi/link'
const { SubMenu, Item } = Menu
const { Header, Sider } = Layout
function SideLayout({ location, dispatch, sideMenuModel }) {
	const { collapsed, openKeys } = sideMenuModel
	console.log(sideMenuModel)
	const toggle = () => {
		console.log()
		const _l = !collapsed
		dispatch({
			type: 'sideMenuModel/changeStates',
			payload: {
				openKeys: [],
				collapsed: _l
			}
		})
		if (!collapsed) {
			document.querySelector('#gContent').style.marginLeft = '80px'
		} else {
			document.querySelector('#gContent').style.marginLeft = '200px'
		}
	}
	const onOpenMenusChange = (param) => {
		const latestOpenKey = param.find((key) => openKeys.indexOf(key) === -1)
		const _menusKey = menus.map((item, index) => {
			return item.key
		})
		if (_menusKey.indexOf(latestOpenKey) === -1) {
			dispatch({
				type: 'sideMenuModel/changeStates',
				payload: {
					openKeys: param
				}
			})
		} else {
			dispatch({
				type: 'sideMenuModel/changeStates',
				payload: {
					openKeys: latestOpenKey ? [ latestOpenKey ] : []
				}
			})
		}
	}
	return (
		<div className={styles.sideNormal}>
			<Sider width={200} className={styles.sideWidth} trigger={null} collapsible collapsed={collapsed}>
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
					<Item disabled className="ttTrigger">
						<Header
							className={styles.sideHeader}
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
					</Item>
					{menus.map((item) => {
						return (
							<SubMenu
								key={item.key}
								title={
									<span>
										<Icon type={item.icon} />
										<span>{item.name}</span>
									</span>
								}
							>
								{item.children &&
									item.children.length > 0 &&
									item.children.map((subItem) => {
										return (
											<Menu.Item key={subItem.key}>
												<Link to={subItem.router}>
													<Icon type={subItem.icon} />
													{subItem.name}
												</Link>
											</Menu.Item>
										)
                  })}
             
							</SubMenu>
						)
					})}
				</Menu>
			</Sider>
		</div>
	)
}

SideLayout.propTypes = {
	sideMenuModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ sideMenuModel }) => ({ sideMenuModel }))(SideLayout)
