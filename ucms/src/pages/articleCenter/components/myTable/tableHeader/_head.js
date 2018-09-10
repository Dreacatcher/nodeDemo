import React from 'react'
// import styles from './_head.less'
class TableHead extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			mousedownX: 0,
			mousemoveX: 0,
			currentX: 0
		}
	}
	componentDidMount() {
		let self = this
		document.querySelector('.ant-table-thead').addEventListener('mousedown', function(evt) {
			evt = evt || window.event
			if (evt.target.className === 'boundary' && evt.pageX) {
				self.setState({
					mousedownX: evt.pageX
				})
			}

			console.log('onmousedown')
		})
		document.querySelector('.ant-table-thead').addEventListener('mousemove', function(evt) {
			evt = evt || window.event
			if (evt.target.className === 'boundary' && evt.pageX) {
				self.setState({
					mousemoveX: evt.pageX
				})
			}
			console.log('mousemove')
		})
		document.querySelector('.ant-table-thead').addEventListener('mouseup', function(evt) {
			let _currentX = self.state.mousemoveX - self.state.mousedownX
			console.log('mouseup')
			console.log(_currentX)
			console.log(evt.target.parentNode.style.clientWidth)
			if (evt.target.className === 'boundary') {
				console.log(evt.target.style.clientWidth)
				if (_currentX < 0) {
				}
				self.setState({
					currentX: _currentX
				})
			}
		})
	}
	render() {
		return (
			<thead class="ant-table-thead">
				<tr>
					<th class="">
						<span>文章编码</span>
						<i className="boundary" />
					</th>
					<th class="">
						<span>文章标题</span>
						<i className="boundary" />
					</th>
					<th class="">
						<span>文章作者</span>
						<i className="boundary" />
					</th>
				</tr>
			</thead>
		)
	}
}
export default TableHead
