import React from 'react'
import { Switch, Router,Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic' // 动态注册model

function Routers({ history, app }) {
	const Error = dynamic({
		app,
		component: () => import('./routes/error/index')
	})
	const routes = [
		{
      path: '/',
			models: () => [import('./routes/layouts/model')],
			component: () => import('./routes/layouts/index')
    },
    {
			path: '/subPage',
			models: () => [import('./routes/subPage/model')],
			component: () => import('./routes/subPage/index')
		},{
			path: '/subPage/subSubPage',
			models: () => [import('./routes/subSubPage/model')],
			component: () => import('./routes/subSubPage/index')
		}
	]
	return (
    <Router history={history}>
			<Switch>
				{/* <Route exact path="/" render={() => <Redirect to="/" />} /> */}
				{routes.map(({ path, ...dynamics }, key) => (
					<Route
                exact
                key={key}
                path={path}
                component={dynamic({ app, ...dynamics })}
              />
				))}
				<Route component={Error} />
			</Switch>
		</Router>
	)
}
// 路由 基于action进行页面跳转
// import {routerRedux} from 'dva/router'
// // inside effects
// yield put(routerRedux.push('/logout'))
// // outside effects
// dispatch(routerRedux.push('/logout'))
// // with query
// routerRedux.push({
//     pathname:'/logout',
//     query:{
//         page:2,
//     }
// })
export default Routers
