import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import styles from './index.less'

function SubPage({ location, dispatch, subPageModel }) {
	return (
		<div className={styles.normal}>
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
		</div>
	)
}

SubPage.propTypes = {
	subPageModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ subPageModel }) => ({ subPageModel }))(SubPage)
