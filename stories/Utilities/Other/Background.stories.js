export default {
	title: 'Utilities/Other/Background',
};

export const NoBackground = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="bg-none">
	.bg-none
</div>
`,
};

export const BackgroundColor = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="bg-body p-12">
		.bg-body
	</div>
	<div class="bg-white p-12">
		.bg-white
	</div>
	<div class="bg-light p-12">
		.bg-light
	</div>
	<div class="bg-dark text-light p-12">
		.bg-dark
	</div>
	<div class="bg-black text-light p-12">
		.bg-black
	</div>
	<div class="bg-primary p-12">
		.bg-primary
	</div>
	<div class="bg-success p-12">
		.bg-success
	</div>
	<div class="bg-info p-12">
		.bg-info
	</div>
	<div class="bg-warning p-12">
		.bg-warning
	</div>
	<div class="bg-danger p-12">
		.bg-danger
	</div>
	<div class="bg-transparent p-12">
		.bg-transparent
	</div>
</div>
`,
};
