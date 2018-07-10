import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import Link from 'umi/link'
import config from '../../../../config/config'
import styles from './index.less'

const FormItem = Form.Item

function Login({ location, dispatch, loginModel, props, form }) {
	const { getFieldDecorator, validateFieldsAndScroll } = form
	function handleSubmit(e) {
		e.preventDefault()
		validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
			}
			dispatch({
				type: 'loginModel/login',
				payload: values
			})
		})
	}

	return (
		<div className={styles.form}>
			<div className={styles.logo}>
				<img alt="logo" src={config.logo} />
				<span>{config.name}</span>
			</div>
			<Form
				onSubmit={(e) => {
					handleSubmit(e)
				}}
			>
				<FormItem hasFeedback>
					{getFieldDecorator('username', {
						rules: [
							{
								required: true
							}
						]
					})(<Input placeholder="Username" />)}
				</FormItem>
				<FormItem hasFeedback>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true
							}
						]
					})(<Input type="password" placeholder="Password" />)}
				</FormItem>
				<Row>
					<Button type="primary" htmlType="submit">
						登陆
					</Button>
					<p>
						<Link to="/sso/register">注册</Link>
						<a>忘记密码</a>
					</p>
				</Row>
			</Form>
		</div>
	)
}

Login.propTypes = {
	form: PropTypes.object,
	dispatch: PropTypes.func,
	loading: PropTypes.object
}

export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
