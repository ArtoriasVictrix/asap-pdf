module.exports = {
	'stories': [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)'
	],
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-docs'
	],
	'framework': {
		'name': '@storybook/html-webpack5',
		'options': {}
	},
	'staticDirs': ['../stories/assets'],
	'core': {
		'disableTelemetry': true,
	},
}
