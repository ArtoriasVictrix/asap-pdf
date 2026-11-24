export default {
	title: 'Layout/Grid',
};

export const Example = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="row">
	<div class="col bg-light border-1 border-solid border-light p-12">
		Column
	</div>
	<div class="col bg-light border-1 border-solid border-light p-12">
		Column
	</div>
	<div class="col bg-light border-1 border-solid border-light p-12">
		Column
	</div>
</div>
`,
};

export const Example2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="row row--gx-12 row--gy-20 bg-info">
	<div class="col-3">
		<div class="bg-light border-1 border-solid border-light p-12">
			Column
		</div>
	</div>
	<div class="col-3">
		<div class="bg-light border-1 border-solid border-light p-12">
			Column
		</div>
	</div>
	<div class="col-6">
		<div class="bg-light border-1 border-solid border-light p-12">
			Column
		</div>
	</div>
	<div class="col-6">
		<div class="bg-light border-1 border-solid border-light p-12">
			Column
		</div>
	</div>
	<div class="col-3">
		<div class="bg-light border-1 border-solid border-light p-12">
			Column
		</div>
	</div>
	<div class="col-3">
		<div class="bg-light border-1 border-solid border-light p-12">
			Column
		</div>
	</div>
</div>
`,
};
