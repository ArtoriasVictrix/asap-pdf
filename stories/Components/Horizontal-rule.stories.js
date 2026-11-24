export default {
	title: 'Components/Horizontal rule (hr)',
};

export const Default = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<hr class="hr my-20" />
`,
};

export const Light = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<hr class="hr hr--light my-20" />
`,
};
