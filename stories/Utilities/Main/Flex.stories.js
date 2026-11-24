export default {
	title: 'Utilities/Main/Flex',
};

export const EnableFlexBehaviors = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex bg-light p-12">I'm a flexbox container!</div>
`,
};

export const EnableFlexBehaviors2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-inline-flex bg-light p-12">I'm a flexbox container!</div>
`,
};

export const Direction = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-flex flex-row bg-info mb-8">
		<div class="bg-light p-8">Flex item 1</div>
		<div class="bg-light p-8">Flex item 2</div>
		<div class="bg-light p-8">Flex item 3</div>
	</div>
	<div class="d-flex flex-row-reverse bg-info">
		<div class="bg-light p-8">Flex item 1</div>
		<div class="bg-light p-8">Flex item 2</div>
		<div class="bg-light p-8">Flex item 3</div>
	</div>
</div>
`,
};

export const Direction2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-flex flex-column bg-info mb-8">
		<div class="bg-light p-8">Flex item 1</div>
		<div class="bg-light p-8">Flex item 2</div>
		<div class="bg-light p-8">Flex item 3</div>
	</div>
	<div class="d-flex flex-column-reverse bg-info">
		<div class="bg-light p-8">Flex item 1</div>
		<div class="bg-light p-8">Flex item 2</div>
		<div class="bg-light p-8">Flex item 3</div>
	</div>
</div>
`,
};

export const JustifyContent = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-flex flex-jc-start bg-info mb-8">
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-jc-end bg-info mb-8">
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-jc-center bg-info mb-8">
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-jc-between bg-info mb-8">
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-jc-around bg-info mb-8">
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-jc-evenly bg-info">
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
</div>
`,
};

export const AlignItems = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-flex flex-ai-start bg-info mb-8" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-ai-end bg-info mb-8" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-ai-center bg-info mb-8" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-ai-baseline bg-info mb-8" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-ai-stretch bg-info" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
</div>
`,
};

export const AlignSelf = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-flex bg-info mb-8" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="flex-as-start bg-light p-8">Aligned flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex bg-info mb-8" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="flex-as-end bg-light p-8">Aligned flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex bg-info mb-8" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="flex-as-center bg-light p-8">Aligned flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex bg-info mb-8" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="flex-as-baseline bg-light p-8">Aligned flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex bg-info" style={{minHeight: '100px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="flex-as-stretch bg-light p-8">Aligned flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
</div>
`,
};

export const GrowAndShrink = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex bg-info">
	<div class="flex-grow-1 bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Third flex item</div>
</div>
`,
};

export const GrowAndShrink2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex bg-info">
	<div class="bg-light w-100p p-8">Flex item</div>
	<div class="flex-shrink-1 bg-light p-8">Flex item</div>
</div>
`,
};

export const AutoMargins = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-flex bg-info mb-8">
		<div class="p-8 bg-light">Flex item</div>
		<div class="p-8 bg-light">Flex item</div>
		<div class="p-8 bg-light">Flex item</div>
	</div>
	<div class="d-flex bg-info mb-8">
		<div class="bg-light p-8 mr-auto">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex bg-info mb-8">
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8 ml-auto">Flex item</div>
	</div>
</div>
`,
};

export const WithAlignItems = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="d-flex flex-ai-start flex-column bg-info mb-8" style={{minHeight: '200px'}}>
		<div class="bg-light p-8 mb-auto">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
	</div>
	<div class="d-flex flex-ai-end flex-column bg-info mb-8" style={{minHeight: '200px'}}>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8">Flex item</div>
		<div class="bg-light p-8 mt-auto">Flex item</div>
	</div>
</div>
`,
};

export const Wrap = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-nowrap bg-info" style={{width: '128px'}}>
	<div class="bg-light p-8" style={{opacity: 0.5}}>Flex item</div>
	<div class="bg-light p-8" style={{opacity: 0.5}}>Flex item</div>
	<div class="bg-light p-8" style={{opacity: 0.5}}>Flex item</div>
	<div class="bg-light p-8" style={{opacity: 0.5}}>Flex item</div>
	<div class="bg-light p-8" style={{opacity: 0.5}}>Flex item</div>
</div>
`,
};

export const Wrap2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-wrap bg-info">
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
</div>
`,
};

export const Wrap3 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-wrap-reverse bg-info">
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
</div>
`,
};

export const Order = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-nowrap bg-light">
	<div class="order-3 bg-info p-8">First flex item</div>
	<div class="order-2 bg-info p-8">Second flex item</div>
	<div class="order-1 bg-info p-8">Third flex item</div>
</div>
`,
};

export const AlignContent = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-ac-start flex-wrap bg-info" style={{minHeight: '200px'}}>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
</div>
`,
};

export const AlignContent2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-ac-end flex-wrap bg-info" style={{minHeight: '200px'}}>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
</div>
`,
};

export const AlignContent3 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-ac-center flex-wrap bg-info" style={{minHeight: '200px'}}>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
</div>
`,
};

export const AlignContent4 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-ac-between flex-wrap bg-info" style={{minHeight: '200px'}}>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
</div>
`,
};

export const AlignContent5 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-ac-around flex-wrap bg-info" style={{minHeight: '200px'}}>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
</div>
`,
};

export const AlignContent6 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex flex-ac-stretch flex-wrap bg-info" style={{minHeight: '200px'}}>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
	<div class="bg-light p-8">Flex item</div>
</div>
`,
};
