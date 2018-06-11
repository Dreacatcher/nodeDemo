import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import styles from './index.less'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
function IndexPage({ location, dispatch, indexPage }) {
	const { collapsed } = indexPage
	// console.log(indexPage)
	// const collapsed = true
	const toggle = () => {
		const _collapsed = !collapsed
		dispatch({
			type: 'indexPage/setCollapsed',
			payload: {
				collapsed: _collapsed
			}
		})
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
					<Sider width={200} style={{ background: '#fff',overflow: 'hidden', }} trigger={null} collapsible collapsed={collapsed}>
						<Header  style={{ background: '#fff', padding: 0 ,height:'35px',lineHeight:'35px'}}
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>


											
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0', textAlgin: 'left' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 ,maxHeight:640,overflow: 'scroll'}} >
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

IndexPage.propTypes = {
	indexPage: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ indexPage }) => ({ indexPage }))(IndexPage)
