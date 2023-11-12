// import '!style-loader!css-loader!../stories/assets/css/style.css';
import '!style-loader!css-loader?url=false!../stories/assets/css/style.css';
import { addDecorator } from '@storybook/html';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: [
				'Introduction', [
					'Welcome',
					'About',
					'Components',
					'Team',
				],
				'Get started', [
					'Install and launch',
					'Install Poppler',
					'Project settings',
					'Npm scripts',
					'Gulp tasks',
				],
				'Sheet', [
					'New document',
					'Sheet',
				],
				'Layout', [
				],
				'Components', [
				],
				'Utilities', [
					'API',
					'Main',
					'Typography',
					'Other',
				],
				'Helpers', [
				],
				'Customization', [
				],
				'Code linting', [
				],
				'Test', [
					'About',
					'Settings'
				],
				'Backend', [
					'C#',
				],
				'*',
			],
		},
	},
}
