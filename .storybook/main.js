module.exports = {
	'stories': [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)'
	],
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials'
	],
	'previewMainTemplate': './.storybook/index.ejs',
	'core': {
		'disableTelemetry': true,
	},
}
