import Echarts from './components/echart/Echarts'

export default (props) => {
	// 默认组件
	if (props.location.pathname === '/echarts/' || props.location.pathname === '/echarts') {
		return <Echarts />
	}
	return <div>{props.children}</div>
}
