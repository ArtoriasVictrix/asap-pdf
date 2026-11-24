export default {
	title: 'Utilities/Other/Borders',
};

export const BorderStyle = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="bg-light border-t-solid p-12">
		.border-t-solid
	</div>
	<div class="bg-light border-x-groove p-12 mt-12">
		.border-x-solid
	</div>
	<div class="bg-light border-dotted border-y-dashed p-12 mt-12">
		.border-dotted, .border-y-dashed
	</div>
</div>
`,
};

export const BorderStyle2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="bg-light border-dotted p-12">
		.border-dotted
	</div>
	<div class="bg-light border-dashed p-12 mt-12">
		.border-dashed
	</div>
</div>
`,
};

export const BorderWidth = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="bg-light border-solid border-3 p-12">
	.border-2
</div>
`,
};

export const BorderWidth2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="bg-light border-solid border-1 border-l-6 p-12">
	.border-1, .border-l-3
</div>
`,
};

export const BorderColor = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="bg-black p-24">
		<div class="text-white border-solid border-white border-1 p-12">
			.border-white
		</div>
		<div class="text-light border-solid border-dark border-1 p-12 mt-12">
			.border-dark
		</div>
	</div>
	<div class="border-solid border-black border-1 p-12 mt-12">
		.border-black
	</div>
	<div class="bg-light border-solid border-light border-1 p-12 mt-12">
		.border-light
	</div>
	<div class="bg-primary border-solid border-primary border-1 p-12 mt-12">
		.border-primary
	</div>
	<div class="bg-success border-solid border-success border-1 p-12 mt-12">
		.border-success
	</div>
	<div class="bg-info border-solid border-info border-1 p-12 mt-12">
		.border-info
	</div>
	<div class="bg-warning border-solid border-warning border-1 p-12 mt-12">
		.border-warning
	</div>
	<div class="bg-danger border-solid border-danger border-1 p-12 mt-12">
		.border-danger
	</div>
</div>
`,
};

export const BorderColor2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="border-solid border-t-success border-r-info border-b-primary border-l-danger border-3 p-12 mt-12">
		.border-t-success, .border-r-info, .border-b-primary, .border-l-danger
	</div>
</div>
`,
};

export const BorderRadius = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="bg-info brs-4 p-12">
		.brs-4
	</div>
	<div class="bg-info brs-12 p-12 mt-12">
		.brs-12
	</div>
	<div class="bg-info brs-tl-20 brs-br-20 p-12 mt-12">
		.brs-tl-20, .brs-br-20
	</div>
	<div class="bg-info brs-tr-20 brs-bl-20 p-12 mt-12">
		.brs-tr-20, .brs-bl-20
	</div>
</div>
`,
};

export const NoBorder = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="bg-info border-solid border-1 no-border p-12">
		.no-border
	</div>
	<div class="bg-info border-solid border-1 no-border-t p-12 mt-12">
		.no-border-t
	</div>
	<div class="bg-info border-solid border-1 no-border-r no-border-b p-12 mt-12">
		.no-border-r, .no-border-b
	</div>
	<div class="bg-info border-solid border-1 no-border-l no-border-t p-12 mt-12">
		.no-border-l, .no-border-t
	</div>
</div>
`,
};
