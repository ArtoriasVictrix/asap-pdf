export default {
	title: 'Utilities/Typography/Vertical align',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div>
	<span class="va-bl">baseline</span>
	<span class="va-t">top</span>
	<span class="va-m">middle</span>
	<span class="va-b">bottom</span>
	<span class="va-tt">text-top</span>
	<span class="va-tb">text-bottom</span>
</div>
`,
};

export const Story2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table style={{ height: '100px' }}>
	<tbody>
		<tr>
			<td class="va-bl">baseline</td>
			<td class="va-t">top</td>
			<td class="va-m">middle</td>
			<td class="va-b">bottom</td>
			<td class="va-tt">text-top</td>
			<td class="va-tb">text-bottom</td>
		</tr>
	</tbody>
</table>
`,
};
