export default {
	title: 'Utilities/Typography/Text truncation',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<div class="row">
		<div class="col-2 text-truncate">
			Praeterea iter est quasdam res quas ex communi.
		</div>
	</div>
	<span class="d-inline-block max-w-140 text-truncate">
		Praeterea iter est quasdam res quas ex communi.
	</span>
</div>
`,
};
