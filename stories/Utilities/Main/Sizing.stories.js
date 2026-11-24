export default {
	title: 'Utilities/Main/Sizing',
};

export const Width = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="bg-light w-100 p-12">Width 100px</div>
	<div class="bg-light w-152 p-12">Width 152px</div>
	<div class="bg-light w-200 p-12">Width 200px</div>
	<div class="bg-light w-25p p-12 mt-20">Width 25%</div>
	<div class="bg-light w-50p p-12">Width 50%</div>
	<div class="bg-light w-75p p-12">Width 75%</div>
	<div class="bg-light w-100p p-12">Width 100%</div>
	<div class="bg-light w-auto p-12">Width auto</div>
</div>
`,
};

export const MinWidth = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-column flex-ai-start">
	<div class="bg-light min-w-136 p-12">136px</div>
	<div class="bg-light min-w-50p p-12 mt-20">Min-width 50%</div>
	<div class="bg-light min-w-75p p-12">Min-width 75%</div>
</div>
`,
};

export const MaxWidth = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="bg-light max-w-100 p-12">
		<i>Max-width 100px.</i> Lorem ipsum dolor sit amet...
	</div>
	<div class="bg-light max-w-136 p-12">
		<i>Max-width 152px.</i> Lorem ipsum dolor sit amet...
	</div>
	<div class="bg-light max-w-200 p-12">
		<i>Max-width 200px.</i> Lorem ipsum dolor sit amet...
	</div>
	<div class="bg-light max-w-25p p-12 mt-20">
		<i>Max-width 25%</i>. Lorem ipsum dolor sit amet...
	</div>
	<div class="bg-light max-w-50p p-12">
		<i>Max-width 50%</i>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
	</div>
	<div class="bg-light max-w-75p p-12">
		<i>Max-width 75%</i>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua.
	</div>
	<div class="bg-light max-w-100p p-12">
		<i>Max-width 100%.</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua.
	</div>
</div>
`,
};

export const Height = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="h-140">
	<div class="d-inline-block va-t bg-light h-32 p-12">Height 32px</div>
	<div class="d-inline-block va-t bg-light h-76 p-12">Height 76px</div>
	<div class="d-inline-block va-t bg-light h-120 p-12">Height 120px</div>
	<div class="d-inline-block va-t bg-light h-25p p-8 ml-20">Height 25%</div>
	<div class="d-inline-block va-t bg-light h-50p p-8">Height 50%</div>
	<div class="d-inline-block va-t bg-light h-75p p-8">Height 75%</div>
	<div class="d-inline-block va-t bg-light h-100p p-8">Height 100%</div>
</div>
`,
};

export const MinHeight = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="h-140">
	<div class="d-inline-block va-t bg-light min-h-300 p-12">Min-height 300px</div>
	<div class="d-inline-block va-t bg-light min-h-340 p-12">Min-height 340px</div>
	<div class="d-inline-block va-t bg-light min-h-400 p-12">Min-height 400px</div>
</div>
`,
};

export const MaxHeight = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="h-100">
	<div class="d-inline-block bg-light h-200 max-h-100p p-12">Max-height 100%</div>
</div>
`,
};
