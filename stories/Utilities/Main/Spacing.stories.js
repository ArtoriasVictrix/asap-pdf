export default {
	title: 'Utilities/Main/Spacing',
};

export const Gap = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid bg-info gap-12">
	<div class="bg-light border-solid border-1 p-8">Grid item 1</div>
	<div class="bg-light border-solid border-1 p-8">Grid item 2</div>
	<div class="bg-light border-solid border-1 p-8">Grid item 3</div>
</div>
`,
};

export const Gap2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex bg-info gap-12">
	<div class="bg-light border-solid border-1 p-8">Grid item 1</div>
	<div class="bg-light border-solid border-1 p-8">Grid item 2</div>
	<div class="bg-light border-solid border-1 p-8">Grid item 3</div>
</div>
`,
};
