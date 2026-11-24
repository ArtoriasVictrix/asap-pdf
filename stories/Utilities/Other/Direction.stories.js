export default {
	title: 'Utilities/Other/Direction',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="dir-ltr">
	.dir-ltr
</div>
`,
};

export const Story2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="dir-rtl">
	.dir-rtl
</div>
`,
};

export const Story3 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex dir-ltr w-400">
	<div class="dir-rtl text-truncate">Text is clipped with three dots on the left. Note that the last punctuation mark can end up at the beginning of the utterance.</div>
</div>
`,
};
