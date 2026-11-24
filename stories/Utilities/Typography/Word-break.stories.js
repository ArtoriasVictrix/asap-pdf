export default {
	title: 'Utilities/Typography/Word break',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="text-break w-200" style={{ 'word-break': 'break-word' }}>
	Hipopotomonstrosesquipedaliofobia
</div>
`,
};
