export default {
	title: 'Utilities/Main/CSS Grid',
};

export const GridAutoFlow = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-af-row gap-12 bg-info" style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
	<div class="bg-light border-1 border-light border-solid p-12" style={{gridColumnEnd: 'span 2'}}>1</div>
	<div class="bg-light border-1 border-light border-solid p-12" style={{gridColumnEnd: 'span 2'}}>2</div>
	<div class="bg-light border-1 border-light border-solid p-12">3</div>
	<div class="bg-light border-1 border-light border-solid p-12">4</div>
	<div class="bg-light border-1 border-light border-solid p-12">5</div>
</div>
`,
};

export const GridAutoFlow2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-af-row-dense gap-12 bg-info" style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
	<div class="bg-light border-1 border-light border-solid p-12" style={{gridColumnEnd: 'span 2'}}>1</div>
	<div class="bg-light border-1 border-light border-solid p-12" style={{gridColumnEnd: 'span 2'}}>2</div>
	<div class="bg-light border-1 border-light border-solid p-12">3</div>
	<div class="bg-light border-1 border-light border-solid p-12">4</div>
	<div class="bg-light border-1 border-light border-solid p-12">5</div>
</div>
`,
};

export const GridAutoFlow3 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-af-col gap-12 bg-info" style={{gridTemplateRows: '1fr 1fr 1fr'}}>
	<div class="bg-light border-1 border-light border-solid p-12" style={{gridRowEnd: 'span 2'}}>1</div>
	<div class="bg-light border-1 border-light border-solid p-12" style={{gridRowEnd: 'span 2'}}>2</div>
	<div class="bg-light border-1 border-light border-solid p-12">3</div>
	<div class="bg-light border-1 border-light border-solid p-12">4</div>
	<div class="bg-light border-1 border-light border-solid p-12">5</div>
</div>
`,
};

export const GridAutoFlow4 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-af-col-dense gap-12 bg-info" style={{gridTemplateRows: '1fr 1fr 1fr'}}>
	<div class="bg-light border-1 border-light border-solid p-12" style={{gridRowEnd: 'span 2'}}>1</div>
	<div class="bg-light border-1 border-light border-solid p-12" style={{gridRowEnd: 'span 2'}}>2</div>
	<div class="bg-light border-1 border-light border-solid p-12">3</div>
	<div class="bg-light border-1 border-light border-solid p-12">4</div>
	<div class="bg-light border-1 border-light border-solid p-12">5</div>
</div>
`,
};

export const GridJustifyContent = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-jc-center gap-12 bg-info">
	<div class="bg-light border-1 border-light border-solid p-12">1</div>
	<div class="bg-light border-1 border-light border-solid p-12">2</div>
	<div class="bg-light border-1 border-light border-solid p-12">3</div>
</div>
`,
};

export const GridJustifyContent2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-jc-end gap-12 bg-info">
	<div class="bg-light border-1 border-light border-solid p-12">1</div>
	<div class="bg-light border-1 border-light border-solid p-12">2</div>
	<div class="bg-light border-1 border-light border-solid p-12">3</div>
</div>
`,
};

export const GridJustifyContent3 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-jc-stretch gap-12 bg-info">
	<div class="bg-light border-1 border-light border-solid p-12">1</div>
	<div class="bg-light border-1 border-light border-solid p-12">2</div>
	<div class="bg-light border-1 border-light border-solid p-12">3</div>
</div>
`,
};

export const GridJustifyItems = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-af-row grid-ji-end gap-12 bg-info" style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
	<div class="bg-light border-1 border-light border-solid p-12">1</div>
	<div class="bg-light border-1 border-light border-solid p-12">2</div>
	<div class="bg-light border-1 border-light border-solid p-12">3</div>
	<div class="bg-light border-1 border-light border-solid p-12">4</div>
	<div class="bg-light border-1 border-light border-solid p-12">5</div>
</div>
`,
};

export const GridJustifySelf = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-ji-end gap-12 bg-info">
	<div class="bg-light border-1 border-light border-solid p-12">1</div>
	<div class="grid-js-stretch bg-light border-1 border-light border-solid p-12">2</div>
	<div class="grid-js-center bg-light border-1 border-light border-solid p-12">3</div>
</div>
`,
};

export const GridAlignItems = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-af-row grid-ai-center gap-12 bg-info" style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
	<div class="h-36 bg-light border-1 border-light border-solid p-8">1</div>
	<div class="h-120 bg-light border-1 border-light border-solid p-8">2</div>
	<div class="h-48 bg-light border-1 border-light border-solid p-8">3</div>
</div>
`,
};

export const GridAlignContent = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-af-row grid-ac-end gap-12 h-120 bg-info" style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
	<div class="h-48 bg-light border-1 border-light border-solid p-8">1</div>
	<div class="h-48 bg-light border-1 border-light border-solid p-8">2</div>
	<div class="h-48 bg-light border-1 border-light border-solid p-8">3</div>
</div>
`,
};

export const GridAlignSelf = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-grid grid-af-row grid-ai-end gap-12 h-120 bg-info" style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
	<div class="h-48 bg-light border-1 border-light border-solid p-8">1</div>
	<div class="grid-as-start h-48 bg-light border-1 border-light border-solid p-8">2</div>
	<div class="h-48 bg-light border-1 border-light border-solid p-8">3</div>
</div>
`,
};
