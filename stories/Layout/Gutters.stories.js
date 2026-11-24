export default {
	title: 'Layout/Gutters',
};

export const HorizontalGutters = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="row row--gx-12">
	<div class="col">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
</div>
`,
};

export const VerticalGutters = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="row row--gy-12">
	<div class="col-6">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
	<div class="col-6">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
	<div class="col-6">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
	<div class="col-6">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
</div>
`,
};

export const HorizontalVerticalGutters = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="row row--g-20">
	<div class="col-6">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
	<div class="col-6">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
	<div class="col-6">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
	<div class="col-6">
		<div class="bg-light p-12">Custom column padding</div>
	</div>
</div>
`,
};

export const RowColumnsGutters = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="row row-cols-2 row--g-20">
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
	<div class="col">
		<div class="bg-light p-12">Row column</div>
	</div>
</div>
`,
};
