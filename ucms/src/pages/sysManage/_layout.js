import SysUser from './components/sysUser/index'

export default (props) => {
	// 默认组件
	if (props.location.pathname === '/sysManage/' || props.location.pathname === '/sysManage') {
		return <SysUser />
	}
	return <div>{props.children}</div>
}
