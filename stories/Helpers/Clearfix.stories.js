export default {
	title: 'Helpers/Clearfix',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="bg-info clearfix">
	<div class="bg-light p-12 float-left">Example Button floated left</div>
	<div class="bg-light p-12 float-right">Example Button floated right</div>
</div>
`,
};
