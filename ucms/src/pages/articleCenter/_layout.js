import ArticleList from './components/articleList/index';

export default (props) => {
  // 默认组件
  if (props.location.pathname === '/articleCenter/'||props.location.pathname === '/articleCenter') {
    return <ArticleList></ArticleList>
  }
	return <div>{props.children}</div>
}
