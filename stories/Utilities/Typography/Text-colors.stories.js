export default {
	title: 'Utilities/Typography/Text colors',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="text-black p-12">.text-black</div>
	<div class="text-white bg-dark p-12">.text-white</div>
	<div class="text-light p-12">.text-light</div>
	<div class="text-muted bg-dark p-12">.text-muted</div>
	<div class="text-primary p-12">.text-primary</div>
	<div class="text-success p-12">.text-success</div>
	<div class="text-info p-12">.text-info</div>
	<div class="text-warning p-12">.text-warning</div>
	<div class="text-danger p-12">.text-danger</div>
	<div class="text-reset p-12">.text-reset</div>
</div>
`,
};
