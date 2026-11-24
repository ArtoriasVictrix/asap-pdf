export default {
	title: 'Utilities/Typography/Text indent',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<p>Unindented text</p>
	<p class="ti-1em">Text indent is set to 1em</p>
	<p class="ti-1-5em">Text indent is set to 1.5em</p>
	<p class="ti-2em">Text indent is set to 2em</p>
	<p class="ti-2-5em">Text indent is set to 2.5em</p>
	<p class="ti-3em">Text indent is set to 3em</p>
</div>
`,
};
