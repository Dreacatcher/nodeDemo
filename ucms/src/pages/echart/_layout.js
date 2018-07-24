import Echarts from './components/echart/Echarts'

export default (props) => {
	// 默认组件
	if (props.location.pathname === '/echart/' || props.location.pathname === '/echart') {
		return <Echarts />
	}
	return <div>{props.children}</div>
}
