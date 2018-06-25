import ProductsList from './components/productsList/index';

export default (props) => {
  // 默认组件
  if (props.location.pathname === '/productsCenter/'||props.location.pathname === '/productsCenter') {
    return <ProductsList></ProductsList>
  }
	return <div>{props.children}</div>
}
