export default {
	title: 'Utilities/Other/Visibility',
};

export const Visible = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="visible w-200" style={{height: '50px'}}>Visible text</div>
`,
};

export const Invisible = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="invisible w-200" style={{height: '50px'}}>Invisible text</div>
`,
};
