import React from 'react'
import styles from './index.less'
import SideMenu from '../components/sideMenu/index'
import Header from '../components/header/index'
import withRouter from 'umi/withRouter'
import { Layout, Breadcrumb } from 'antd'
const { Content } = Layout
function AppLayout({ children, location }) {
	return (
		<div className={styles.normal}>
			<Header id="gHeader"  location={location} />
			<SideMenu id="gSideMenu"  children={children} location={location} />
			<Layout id="gContent"  className={styles.contwp}>
				<Breadcrumb className={styles.breadcrumb}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Content className={styles.cont}>
					<div className={styles.content}>
						<div className={styles.main}>{children}</div>
					</div>
				</Content>
			</Layout>
		</div>
	)
}
export default withRouter(AppLayout)
