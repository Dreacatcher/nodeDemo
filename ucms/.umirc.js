export default {
	plugins: [
		[
			'umi-plugin-routes',
			{
				exclude: [ /models/, /services/,/components/ ]
			}
		],
		'umi-plugin-dva'
	],
	
}
