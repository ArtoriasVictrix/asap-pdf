export default {
	title: 'Components/Checkbox',
};

export const Default = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="checkbox mb-12">
	<input class="checkbox__input" id="cb1" type="checkbox" />
	<label class="checkbox__label" for="cb1">Default checkbox</label>
</div>
`,
};

export const Default2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="checkbox mb-12">
	<input class="checkbox__input" id="cb2" type="checkbox" checked />
	<label class="checkbox__label" for="cb2">Default checkbox (checked)</label>
</div>
`,
};

export const Default3 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="checkbox mb-12">
	<input class="checkbox__input" id="cb3" type="checkbox" disabled />
	<label class="checkbox__label" for="cb3">Default checkbox (disabled)</label>
</div>
`,
};

export const Default4 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="checkbox">
	<input class="checkbox__input" id="cb4" type="checkbox" disabled checked />
	<label class="checkbox__label" for="cb4">Default checkbox (checked and disabled)</label>
</div>
`,
};

export const SmallCheckboxSm = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="checkbox checkbox--sm mb-12">
	<input class="checkbox__input" id="cb5" type="checkbox" />
	<label class="checkbox__label" for="cb5">Small checkbox</label>
</div>
`,
};

export const SmallCheckboxSm2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="checkbox checkbox--sm mb-12">
	<input class="checkbox__input" id="cb6" type="checkbox" checked />
	<label class="checkbox__label" for="cb6">Small checkbox (checked)</label>
</div>
`,
};
