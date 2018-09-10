import React from 'react'
import Header from './tableHeader/_head'
const dataSource = [
	{
		key: '1',
		name: '胡彦斌',
		age: 32,
		address: '西湖区湖底公园1号',
		render: (text) => <a href="">{text}</a>
	},
	{
		key: '2',
		name: '胡彦祖',
		age: 42,
		address: '西湖区湖底公园1号'
	}
]
const columns = [
	{
		title: '姓名',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: '年龄',
		dataIndex: 'age',
		key: 'age'
	},
	{
		title: '住址',
		dataIndex: 'address',
		key: 'address'
	}
]
class Table extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	render() {
		return (
			<div>
				<table>
					<Header datasource={dataSource} columns={columns} />
				</table>
			</div>
		)
	}
}
export default Table
