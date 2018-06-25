import { Dropdown, Menu, Icon } from 'antd'
import Link from 'umi/link'
import styles from './index.less'
const logo = require('../../assets/img/logo.png')
function Header({ location }) {
	const userMenu = (
		<Menu>
			<Menu.Item className={styles.setWidth}> 
				<Icon type="lock" /> 修改密码
			</Menu.Item>
			<Menu.Item className={styles.setWidth}> 
				<Icon type="logout" /> 退出
			</Menu.Item>
		</Menu>
	)
	return (
		<div className="gHeader">
			<div className="mHdLeft">
				<Menu
					selectedKeys={[ location.pathname ]}
					mode="horizontal"
					theme="dark"
					className={styles.headerNormal}
				>
					<Menu.Item key="/">
						<img className={styles.mHdLogo} src={logo} alt="" />
					</Menu.Item>
				</Menu>
			</div>
			<div className="mHdRight">
				<Menu
					selectedKeys={[ location.pathname ]}
					mode="horizontal"
					theme="dark"
					className={styles.headerNormal}
				>
					<Menu.Item key="/" >
						<Dropdown overlay={userMenu} placement="bottomCenter">
							<Link to="/">
								<Icon type="user" />陆朝明
							</Link>
						</Dropdown>
					</Menu.Item>
					<Menu.Item key="/message">
						<Link to="/">
							<Icon type="mail" />
						</Link>
					</Menu.Item>
					<Menu.Item key="/users">
						<Link to="/users">
							<Icon type="bars" />用户列表
						</Link>
					</Menu.Item>
					<Menu.Item key="/umi">
						<Link to="/users">
							<Icon type="bars" />个人简介
						</Link>
					</Menu.Item>
					<Menu.Item key="/dva">
						<Link to="/users">
							<Icon type="bars" />文章列表
						</Link>
					</Menu.Item>
					<Menu.Item key="/404">
						<Link to="/page-you-dont-know">
							<Icon type="frown-circle" />404
						</Link>
					</Menu.Item>
		
				</Menu>
			</div>
		</div>
	)
}

export default Header
