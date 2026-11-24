export default {
	title: 'Utilities/Typography/White space',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="text-wrap bg-light w-120 p-12">
	Lorem ipsum dolor sit amet
</div>
`,
};

export const Story2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="text-nowrap bg-light w-120 p-12">
	Lorem ipsum dolor sit amet
</div>
`,
};
