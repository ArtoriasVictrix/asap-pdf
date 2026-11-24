// Regular import: Storybook's own css pipeline (style-loader + css-loader)
// resolves the relative url() font paths inside the stylesheet
import '../stories/assets/css/style.css';

export const parameters = {
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

// The data-theme attribute on the preview root element (a legacy of the custom
// index.ejs template from Storybook 6). This module runs inside the preview
// iframe, so a top-level side effect covers every page: both docs-only MDX
// pages and stories (decorators are not applied to docs-only pages).
document.documentElement.setAttribute('data-theme', 'asap');
