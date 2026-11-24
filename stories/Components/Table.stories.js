export default {
	title: 'Components/Tables',
};

export const Default = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table">
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
			<td>$10,000</td>
			<td>$15,000</td>
		</tr>
		<tr>
			<td>February</td>
			<td>$6,000</td>
			<td>$190,000</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$70,000</td>
			<td>$50,000</td>
		</tr>
		<tr>
			<td>April</td>
			<td>$300</td>
			<td>$70,000</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$80</td>
			<td>$300</td>
		</tr>
		<tr>
			<td>June</td>
			<td>$1,000</td>
			<td>$35,000</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$87,380</td>
			<td>$360,300</td>
		</tr>
	</tfoot>
</table>
`,
};

export const WithBorders = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--borders">
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
			<td>$10,000</td>
			<td>$15,000</td>
		</tr>
		<tr>
			<td>February</td>
			<td>$6,000</td>
			<td>$190,000</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$70,000</td>
			<td>$50,000</td>
		</tr>
		<tr>
			<td>April</td>
			<td>$300</td>
			<td>$70,000</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$80</td>
			<td>$300</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$86,380</td>
			<td>$325,300</td>
		</tr>
	</tfoot>
</table>
`,
};

export const WithVerticalBorders = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--borders-vert">
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
			<td>$10,000</td>
			<td>$15,000</td>
		</tr>
		<tr>
			<td>February</td>
			<td>$6,000</td>
			<td>$190,000</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$70,000</td>
			<td>$50,000</td>
		</tr>
		<tr>
			<td>April</td>
			<td>$300</td>
			<td>$70,000</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$80</td>
			<td>$300</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$86,380</td>
			<td>$325,300</td>
		</tr>
	</tfoot>
</table>
`,
};

export const WithHorizontalBorders = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--borders-hor">
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
			<td>$10,000</td>
			<td>$15,000</td>
		</tr>
		<tr>
			<td>February</td>
			<td>$6,000</td>
			<td>$190,000</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$70,000</td>
			<td>$50,000</td>
		</tr>
		<tr>
			<td>April</td>
			<td>$300</td>
			<td>$70,000</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$80</td>
			<td>$300</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$86,380</td>
			<td>$325,300</td>
		</tr>
	</tfoot>
</table>
`,
};

export const WithAnOuterBorder = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--outer-border">
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
			<td>$10,000</td>
			<td>$15,000</td>
		</tr>
		<tr>
			<td>February</td>
			<td>$6,000</td>
			<td>$190,000</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$70,000</td>
			<td>$50,000</td>
		</tr>
		<tr>
			<td>April</td>
			<td>$300</td>
			<td>$70,000</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$80</td>
			<td>$300</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$86,380</td>
			<td>$325,300</td>
		</tr>
	</tfoot>
</table>
`,
};

export const WithBlackBorders = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--borders table--outer-border table--borders-black">
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
			<td>$10,000</td>
			<td>$15,000</td>
		</tr>
		<tr>
			<td>February</td>
			<td>$6,000</td>
			<td>$190,000</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$70,000</td>
			<td>$50,000</td>
		</tr>
		<tr>
			<td>April</td>
			<td>$300</td>
			<td>$70,000</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$80</td>
			<td>$300</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$86,380</td>
			<td>$325,300</td>
		</tr>
	</tfoot>
</table>
`,
};

export const WithAlternatingRowBackgroundAZebraStripedTable = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--striped">
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
			<td>$10,000</td>
			<td>$15,000</td>
		</tr>
		<tr>
			<td>February</td>
			<td>$6,000</td>
			<td>$190,000</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$70,000</td>
			<td>$50,000</td>
		</tr>
		<tr>
			<td>April</td>
			<td>$300</td>
			<td>$70,000</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$80</td>
			<td>$300</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$86,380</td>
			<td>$325,300</td>
		</tr>
	</tfoot>
</table>
`,
};

export const WithAlternatingColumnBackgroundsAZebraStripedColumn = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<table class="table table--striped-cols">
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
			<td>$10,000</td>
			<td>$15,000</td>
		</tr>
		<tr>
			<td>February</td>
			<td>$6,000</td>
			<td>$190,000</td>
		</tr>
		<tr>
			<td>March</td>
			<td>$70,000</td>
			<td>$50,000</td>
		</tr>
		<tr>
			<td>April</td>
			<td>$300</td>
			<td>$70,000</td>
		</tr>
		<tr>
			<td>May</td>
			<td>$80</td>
			<td>$300</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>$86,380</td>
			<td>$325,300</td>
		</tr>
	</tfoot>
</table>
`,
};
