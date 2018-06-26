import Login from './components/login/index';

export default (props) => {
  // 默认组件
  if (props.location.pathname === '/sso/'||props.location.pathname === '/sso') {
    return <Login></Login>
  }
	return <div>{props.children}</div>
}
