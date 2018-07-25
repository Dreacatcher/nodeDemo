import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import { Table } from 'antd'
// import styles from './index.less'
function ArticleList({ location, dispatch, articleListModel }) {
	const { articleList } = articleListModel
	console.log(articleList)
	const columns = [
		{
			title: '文章编码',
			dataIndex: 'number'
		},
		{
			title: '文章标题',
			dataIndex: 'title'
		},
		{
			title: '文章作者',
			dataIndex: 'athor'
		},
		{
			title: '创建时间',
			dataIndex: 'times'
		},
		{
			title: '操作',
			dataIndex: 'options',
			render: () => {
				return <a>查看详情</a>
			}
		}
	]
	const data = [
		{
			key: 1,
			number: 232248323982948,
			title: 'Using editor component',
			athor: 'JohnBrownee',
			times: '2018-7-20'
		},
		{
			key: 2,
			number: 232248323982949,
			title: 'Using editor component',
			athor: 'JohnBrown',
			times: '2018-7-21'
		},
		{
			key: 3,
			number: 232248323982950,
			title: 'Using editor component',
			athor: 'JohnBrownww',
			times: '2018-7-22'
		}
	]
	return (
		<div>
			<div>
				<Table columns={columns} dataSource={data} size="middle" />
			</div>
		</div>
	)
}

ArticleList.propTypes = {
	articleListModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ articleListModel }) => ({ articleListModel }))(ArticleList)
