export default {
	title: 'Utilities/Main/Position',
};

export const ArrangeElements = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="pos-relative min-h-300 bg-light">
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-0 pos-left-0"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-0 pos-right-0"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-50p pos-left-50p"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-bottom-50p pos-right-50p"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-bottom-0 pos-left-0"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-bottom-0 pos-right-0"></div>
</div>
`,
};

export const CenterElements = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="pos-relative min-h-300 bg-light">
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-0 pos-left-0 translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-0 pos-left-50p translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-0 pos-left-100p translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-50p pos-left-0 translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-50p pos-left-50p translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-50p pos-left-100p translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-100p pos-left-0 translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-100p pos-left-50p translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-100p pos-left-100p translate-middle"></div>
</div>
`,
};

export const CenterElements2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="pos-relative min-h-300 bg-light">
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-0 pos-left-0"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-0 pos-left-50p translate-middle-x"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-0 pos-right-0"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-50p pos-left-0 translate-middle-y"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-50p pos-left-50p translate-middle"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-top-50p pos-right-0 translate-middle-y"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-bottom-0 pos-left-0"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-bottom-0 pos-left-50p translate-middle-x"></div>
	<div class="pos-absolute w-32 h-32 bg-dark brs-4 pos-bottom-0 pos-right-0"></div>
</div>
`,
};
