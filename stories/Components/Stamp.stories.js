export default {
	title: 'Components/Stamp',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="stamp">
	BANK EXAMPLE
	<br />
	IBAN: DE99 0099 0099 9900 0000 99
	<br />
	SOME NUMBER: 99009900990099009900
	<br/>
	<span class="tt-u">APPROVED</span>
</div>
`,
};

export const Story2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="stamp stamp--danger p-12 w-300">
	BANK EXAMPLE
	<br />
	IBAN: DE99 0099 0099 9900 0000 99
	<br />
	SOME NUMBER: 99009900990099009900
	<br/>
	<span class="tt-u">REJECTED</span>
</div>
`,
};
