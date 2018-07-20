import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import { Input } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
function ArticleCreate({ location, dispatch, articleCreateModel }) {
	const { editorContent } = articleCreateModel
	const handleChange = (editorContent) => {
		console.log(editorContent)
		dispatch({
			type: 'articleCreateModel/updateStates',
			payload: {
				editorContent
			}
		})
	}
	return (
		<div>
			<div className="creactArticleTt">
				<Input placeholder="输入文章标题" />
			</div>
			<Editor
				editorState={editorContent}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
				onEditorStateChange={(e) => {
					handleChange(e)
				}}
			/>
		</div>
	)
}

ArticleCreate.propTypes = {
	articleCreateModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ articleCreateModel }) => ({ articleCreateModel }))(ArticleCreate)
