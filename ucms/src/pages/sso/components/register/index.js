import React from 'react'
import PropTypes from 'prop-types' // ES6
import { connect } from 'dva'
import styles from './index.less'
import { Form, Input, Select, Row, Col, Checkbox, Button } from 'antd'
const FormItem = Form.Item
const Option = Select.Option

function Register({ location, dispatch, registerModel, props, form }) {
	const { getFieldDecorator } = form
	const { confirmDirty } = registerModel
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 8 }
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 }
		}
	}
	const tailFormItemLayout = {
		wrapperCol: {
			xs: {
				span: 24,
				offset: 0
			},
			sm: {
				span: 16,
				offset: 8
			}
		}
	}
	const handleSubmit = (e) => {
    e.preventDefault()
    debugger
		form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
			}
		})
	}
	const handleConfirmBlur = (e) => {
		const value = e.target.value
		const _confirmDirty = confirmDirty || !!value

		dispatch({
			type: 'registerModel/updateStates',
			payload: {
				confirmDirty: _confirmDirty
			}
		})
	}
	const compareToFirstPassword = (rule, value, callback) => {
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!')
		} else {
			callback()
		}
	}
	const validateToNextPassword = (rule, value, callback) => {
		if (value && confirmDirty) {
			form.validateFields([ 'confirm' ], { force: true })
		}
		callback()
	}

	const prefixSelector = getFieldDecorator('prefix', {
		initialValue: '86'
	})(
		<Select style={{ width: 70 }}>
			<Option value="86">+86</Option>
			<Option value="87">+87</Option>
		</Select>
	)



	return (
		<div className={styles.registerWp}>
      <h2 className={styles.registerTt}>会员注册</h2>
			<Form onSubmit={()=>{handleSubmit()}}>
				<FormItem {...formItemLayout} label="用户名">
					{getFieldDecorator('name', {
						rules: [
							{
								type: 'text',
								message: '用户名格式输入有误!'
							},
							{
								required: true,
								message: '请输入用户名!'
							}
						]
					})(<Input />)}
				</FormItem>
				<FormItem {...formItemLayout} label="邮箱">
					{getFieldDecorator('email', {
						rules: [
							{
								type: 'email',
								message: '邮箱格式输入有误!'
							},
							{
								required: true,
								message: '请输入邮箱!'
							}
						]
					})(<Input />)}
				</FormItem>
				<FormItem {...formItemLayout} label="密码">
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: '请输入密码!'
							},
							{
								validator: validateToNextPassword
							}
						]
					})(<Input type="password" />)}
				</FormItem>
				<FormItem {...formItemLayout} label="确认密码">
					{getFieldDecorator('confirm', {
						rules: [
							{
								required: true,
								message: '请输入确认密码!'
							},
							{
								validator: compareToFirstPassword
							}
						]
					})(<Input type="password" onBlur={(e)=>{handleConfirmBlur(e)}} />)}
				</FormItem>
			
				{/* <FormItem {...formItemLayout} label="地址">
					{getFieldDecorator('residence', {
						initialValue: [ 'zhejiang', 'hangzhou', 'xihu' ],
						rules: [ { type: 'array', required: true, message: 'Please select your habitual residence!' } ]
					})(<Cascader options={residences} />)}
				</FormItem> */}
				<FormItem {...formItemLayout} label="手机号码">
					{getFieldDecorator('phone', {
						rules: [ { required: true, message: '请输入手机号码!' } ]
					})(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
				</FormItem>

				<FormItem {...formItemLayout} label="短信验证码">
					<Row gutter={8}>
						<Col span={12}>
							{getFieldDecorator('captcha', {
								rules: [ { required: true, message: '请输入短信验证码' } ]
							})(<Input />)}
						</Col>
						<Col span={12}>
							<Button>发送短信验证码</Button>
						</Col>
					</Row>
				</FormItem>
				<FormItem {...tailFormItemLayout}>
					{getFieldDecorator('agreement', {
						valuePropName: 'checked'
					})(<Checkbox>同意</Checkbox>)}
				</FormItem>
				<FormItem {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">
						注册
					</Button>
				</FormItem>
			</Form>
		</div>
	)
}

Register.propTypes = {
	registerModel: PropTypes.object
}
// 指定订阅数据，这里关联了,建立数据关联关系
export default connect(({ registerModel }) => ({ registerModel }))(Form.create()(Register))
