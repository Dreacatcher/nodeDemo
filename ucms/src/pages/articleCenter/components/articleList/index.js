import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
// import styles from './index.less'
function ArticleList({ location, dispatch, articleListModel }) {
	
	return (
		<div>
			<div>
				<h1>Yay! Welcome to dva! </h1>
        <h2>articleLis tarticleListar ticleLista rticleList </h2>
				<div />
				<ul>
					<li>
						To get started, edit <code>src/index.js</code> and save to reload.
					</li>
					<li>
						<a href="https://github.com/dvajs/dva">Getting Started</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

ArticleList.propTypes = {
	articleListModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ articleListModel }) => ({ articleListModel }))(ArticleList)