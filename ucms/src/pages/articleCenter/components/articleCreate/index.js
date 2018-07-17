import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
// import { connect } from 'react-umeditor'
import ReactUeditor from 'react-ueditor'
// import Editor  from 'react-umeditor'
// import styles from './index.less'
function ArticleCreate({ location, dispatch, articleCreateModel }) {
	// const { content } = articleCreateModel
	// const getIcons = () => {
	// 	var icons = [
	// 		'source | undo redo | bold italic underline strikethrough fontborder emphasis | ',
	// 		'paragraph fontfamily fontsize | superscript subscript | ',
	// 		'forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ',
	// 		'cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ',
	// 		'horizontal date time  | image emotion spechars | inserttable'
	// 	]
	// 	return icons
	// }
	// const getPlugins = () => {
	// 	return {
	// 		image: {
	// 			uploader: {
	// 				name: 'file',
	// 				url: '/api/upload'
	// 			}
	// 		}
	// 	}
	// }
	const handleChange = (content) => {
		dispatch({
			type: 'articleCreateModel/updateStates',
			payload: {
				content
			}
		})
	}
	return (
		<ReactUeditor
			config={{ zIndex: 1001 }}
			onChange={()=>{handleChange()}}
			plugins={[ 'uploadImage', 'insertCode' ]}
			// uploadImage={this.uploadImage}
			ueditorPath="/static/uf8-php"
			value="Hello World!"
		/>
	)
}

ArticleCreate.propTypes = {
	articleCreateModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ articleCreateModel }) => ({ articleCreateModel }))(ArticleCreate)
