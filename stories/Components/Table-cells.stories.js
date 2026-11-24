export default {
	title: 'Components/Table cells',
};

export const Padding = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--borders table--outer-border table--borders-black cells-p-16">
	<thead>
		<tr>
			<th>Month</th>
			<th>Expenses</th>
			<th>Income</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>January</td>
			<td>$100</td>
			<td>$100</td>
		</tr>
		<tr class="cells-p-4">
			<td>February</td>
			<td>$80</td>
			<td>$100</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$100</td>
			<td>$100</td>
		</tr>
		<tr>
			<td>April</td>
			<td class="cells-p-4 va-t">$80</td>
			<td>$100</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$100</td>
			<td>$100</td>
		</tr>
		<tr>
			<td>June</td>
			<td>$80</td>
			<td>$100</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$540</td>
			<td>$600</td>
		</tr>
	</tfoot>
</table>
`,
};

export const VerticalAlignment = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--borders table--outer-border table--borders-black cells-va-t">
	<thead>
		<tr class="cells-va-m">
			<th class="h-44">Month</th>
			<th class="cells-va-b">Expenses</th>
			<th>Income</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="text-lg h-44">January</td>
			<td class="cells-va-m">10 000</td>
			<td class="text-xl">15 000</td>
		</tr>
	</tbody>
</table>
`,
};
