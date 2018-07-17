var React = require('react')
var Editor = require('react-umeditor')

class EditorCompnent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: ''
		}
	}
	handleChange(content) {
		this.setState({
			content: content
		})
	}
	getIcons() {
		var icons = [
			'source | undo redo | bold italic underline strikethrough fontborder emphasis | ',
			'paragraph fontfamily fontsize | superscript subscript | ',
			'forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ',
			'cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ',
			'horizontal date time  | image emotion spechars | inserttable'
		]
		return icons
	}
	getPlugins() {
		return {
			image: {
				uploader: {
					name: 'file',
					url: '/api/upload'
				}
			}
		}
	}
	render() {
		var icons = this.getIcons()
		var plugins = this.getPlugins()
		return (
			<Editor
				ref="editor"
				icons={icons}
				value={this.state.content}
				defaultValue="<p>React Umeditor</p>"
				onChange={this.handleChange.bind(this)}
				plugins={plugins}
			/>
		)
	}
}

export default EditorCompnent
