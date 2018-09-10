import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import cn from 'classnames'
import { Form, Input, Button, Row, Col } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import styles from './index.less'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
// import EchartC from '../echart/Echarts'
const FormItem = Form.Item
function ArticleCreate({ location, dispatch, createArticleModel, form }) {
	const { getFieldDecorator } = form
	const { editorStates, articleParam } = createArticleModel
	const handleChange = (editorStates) => {
		dispatch({
			type: 'createArticleModel/updateStates',
			payload: {
				editorStates
			}
		})
	}
	const setEditorCont = (editorContent) => {
		articleParam.cont = editorContent
	}
	const setEditorTitle = (editorTitle) => {
		articleParam.title = editorTitle
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
				articleParam.title = values.editorTitle
				articleParam.author = values.editorAuthor
				articleParam.cont = values.editorContent
			}
		})
		dispatch({ type: 'createArticleModel/createArticle', payload: articleParam })
	}

	return (
		<div className="createArticleWp">
			{/* <EchartC /> */}
			<Form
				onSubmit={(e) => {
					handleSubmit(e)
				}}
				className="login-form"
			>
				<Row>
					<Col className="setPdt" span={4}>
						文章标题：
					</Col>
					<Col span={12}>
						<FormItem>
							{getFieldDecorator('editorTitle', {
								initialValue: articleParam.title,
								rules: [ { required: true, message: '请输入文章标题' } ]
							})(
								<div className={cn(styles.creacteArticleTt, styles.test)}>
									<Input
										placeholder="输入文章标题"
										onBlur={(e) => {
											setEditorTitle(e.target.value)
										}}
									/>
								</div>
							)}
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col className="setPdt" span={4}>
						发布人：
					</Col>
					<Col span={5}>
						<FormItem>
							{getFieldDecorator('editorAuthor', {
								initialValue: articleParam.title,
								rules: [ { required: true, message: '请输入发布人' } ]
							})(
								<div className={cn(styles.creacteArticleTt, styles.test)}>
									<Input
										placeholder="请输入发布人"
										onBlur={(e) => {
											setEditorTitle(e.target.value)
										}}
									/>
								</div>
							)}
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col className="setPdt" span={4}>
						文章内容：
					</Col>
					<Col span={20}>
						<FormItem>
							{getFieldDecorator('editorContent', {
								initialValue: articleParam.cont,
								rules: [ { required: true, message: '请输入正文内容' } ]
							})(
								<div className="textCont">
									<Editor
										editorState={editorStates}
										className="textCont"
										toolbarClassName="toolbarClassName"
										wrapperClassName="wrapperClassName"
										editorClassName="editorClassName"
										onEditorStateChange={(e) => {
											handleChange(e)
										}}
										onContentStateChange={() => {
											setEditorCont(draftToHtml(convertToRaw(editorStates.getCurrentContent())))
											// console.log(draftToHtml(convertToRaw(editorStates.getCurrentContent())))
										}}
									/>
								</div>
							)}
						</FormItem>
					</Col>
				</Row>
				<FormItem>
					<Row>
						<Col span={4} />
						<Col span={20}>
							<Button type="primary" htmlType="submit" className="login-form-button">
								发布
							</Button>
						</Col>
					</Row>
				</FormItem>
			</Form>
		</div>
	)
}

ArticleCreate.propTypes = {
	createArticleModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ createArticleModel }) => ({ createArticleModel }))(Form.create()(ArticleCreate))
