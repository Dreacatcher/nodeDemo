

import Users from './components/userList/index';

export default (props) => {
  // 默认组件
  if (props.location.pathname === '/users/'||props.location.pathname === '/users') {
    return <Users></Users>
  }
	return <div>{props.children}</div>
}
