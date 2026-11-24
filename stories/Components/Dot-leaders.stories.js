export default {
	title: 'Components/Dot leaders',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="w-300">
	<dl class="param">
		<dt class="param__prop">Your balance</dt>
		<dd class="param__value">$100</dd>
	</dl>
	<dl class="param">
		<dt class="param__prop">Expenses</dt>
		<dd class="param__value">$20</dd>
	</dl>
	<dl class="param">
		<dt class="param__prop">Received money</dt>
		<dd class="param__value">$120</dd>
	</dl>
</div>
`,
};
