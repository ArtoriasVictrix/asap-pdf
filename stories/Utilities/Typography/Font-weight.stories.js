export default {
	title: 'Utilities/Typography/Font weight',
};

export const Strong = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<strong>
	The &lt;strong&gt; HTML element indicates that its contents have strong importance.
</strong>
`,
};

export const B = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<b>
	The &lt;b&gt; HTML element draws attention to certain text without indicating a higher level of importance.
</b>
`,
};

export const Classes = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="fw-xb">.fw-xb — 800</div>
	<div class="fw-b">.fw-b — 700</div>
	<div class="fw-sb">.fw-sb — 600</div>
	<div class="fw-m">.fw-m — 500</div>
	<div class="fw-n">.fw-n — 400</div>
	<div class="fw-l">.fw-l — 300</div>
	<div class="fw-xl">.fw-xl — 200</div>
</div>
`,
};
