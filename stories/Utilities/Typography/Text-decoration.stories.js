export default {
	title: 'Utilities/Typography/Text decoration',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<p class="underline">This text has a line underneath it.</p>
	<p class="line-through">This text has a line going through it.</p>
	<a href="#" class="no-underline">This link has its text decoration removed</a>
</div>
`,
};
