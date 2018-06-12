import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import styles from './index.less'

function SubSubPage({ location, dispatch, subSubPageModel }) {
	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>error 404</h1>
			<div className={styles.welcome} />
		</div>
	)
}

// 指定订阅数据，这里关联了,建立数据关联关系
export default connect()(SubSubPage)
