export default {
	title: 'Helpers/Ratio',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-inline-block bg-light w-200 border-solid border-1 border-dark ratio ratio--4x3">
		<div class="pos-absolute pos-top-50p pos-left-50p translate-middle">.ratio--4x3</div>
	</div>
	<div class="d-inline-block bg-light w-200 border-solid border-1 border-dark ratio ratio--16x9">
		<div class="pos-absolute pos-top-50p pos-left-50p translate-middle">.ratio--16x9</div>
	</div>
	<div class="d-inline-block bg-light w-200 border-solid border-1 border-dark ratio ratio--21x9">
		<div class="pos-absolute pos-top-50p pos-left-50p translate-middle">.ratio--21x9</div>
	</div>
</div>
`,
};

export const CustomRatios = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-inline-block bg-light w-200 border-solid border-1 border-dark ratio" style={{ "--aspect-ratio": "50%" }}>
		<div class="pos-absolute pos-top-50p pos-left-50p translate-middle">2x1</div>
	</div>
</div>
`,
};
