import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import styles from './index.less'
import { routerRedux } from 'dva/router'
import { timestamps } from '../config/config'
import SideMenu from '../components/sideMenu/index'
import Header from '../components/header/index'
// import withRouter from 'umi/withRouter'
import { Layout, Breadcrumb } from 'antd'
const { Content } = Layout
function setTimestamps(location,dispatch){
  if (!location.query.key) {
    if(location.search===''){
      dispatch(
        routerRedux.push({
          pathname: location.pathname,
          query: {
            key: timestamps
          },
        })
      )
    }else{
      dispatch(
        routerRedux.push({
          pathname: location.pathname,
          search:location.search+'&key='+timestamps
        })
      )
    }
	}
}
function AppLayout({ children, location, dispatch, appModel }) {
	setTimestamps(location,dispatch)
	if (location.pathname === '/login') {
		return (
			<Layout id="gContentWp" className={styles.nologin}>
				<div className={styles.normal}>
					<div className={styles.main}>{children}</div>
				</div>
			</Layout>
		)
	}
	return (
		<div className={styles.normal}>
			<Layout id="gContentWp" className={styles.logged}>
				<Header id="gHeader" location={location} />
				<SideMenu id="gSideMenu" children={children} location={location} />
				<Layout id="gContent" className={styles.contwp}>
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
			</Layout>
		</div>
	)
}

AppLayout.propTypes = {
	appModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ appModel }) => ({ appModel }))(AppLayout)
