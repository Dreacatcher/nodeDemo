import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import styles from './index.less'

function SubSubPage({ location, dispatch, subSubPageModel }) {
	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>subSubPagesubSubPagesubSubPagesubSubPageYay! Welcome to dva!</h1>
			<div className={styles.welcome} />
			<ul className={styles.list}>
				<li>
					To get started,subSubPage edit <code>src/index.js</code> and save to reload.
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

SubSubPage.propTypes = {
	subSubPageModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ subSubPageModel }) => ({ subSubPageModel }))(SubSubPage)
