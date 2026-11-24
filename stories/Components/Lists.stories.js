export default {
	title: 'Components/Lists',
};

export const Default = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<ol class="ol">
	<li>Ordered list item</li>
	<li>Ordered list item</li>
	<li>Ordered list item</li>
</ol>
`,
};

export const Nested = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<ol class="ol">
	<li>First item</li>
	<li>Second item</li>
	<li>Third item
		<ol class="ol ol--nested mt-12">
			<li>Third item first subitem</li>
			<li>Third item second subitem</li>
			<li>Third item third subitem
				<ol class="ol ol--nested mt-12">
					<li>Third item third subitem first sub-subitem</li>
					<li>Third item third subitem second sub-subitem</li>
					<li>Third item third subitem third sub-subitem</li>
				</ol>
			</li>
		</ol>
	</li>
</ol>
`,
};

export const WithDifferentFontSizes = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<ol class="ol text-lg">
	<li class="text-lg">First item</li>
	<li>Second item</li>
	<li>Third item
		<ol class="ol ol--nested text-xs mt-12">
			<li>Third item first subitem</li>
			<li>Third item second subitem</li>
			<li>Third item third subitem
				<ol class="ol ol--nested text-sm mt-12">
					<li>Third item third subitem first sub-subitem</li>
					<li>Third item third subitem second sub-subitem</li>
					<li>Third item third subitem third sub-subitem</li>
				</ol>
			</li>
		</ol>
	</li>
</ol>
`,
};

export const NoLeftMarginFlatAppearance = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<ol class="ol ol--flat">
	<li>First item
		<ol class="ol ol--nested">
			<li>First item first subitem</li>
			<li>First item second subitem</li>
			<li>First item third subitem</li>
		</ol>
	</li>
	<li>Second item
		<ol class="ol ol--nested">
			<li>Second item first subitem</li>
			<li>Second item second subitem</li>
			<li>Second item third subitem</li>
		</ol>
	</li>
	<li>Third item
		<ol class="ol ol--nested ol--flat">
			<li>Third item first subitem</li>
			<li>Third item second subitem</li>
			<li>Third item third subitem
				<ol class="ol ol--nested ol--flat">
					<li>Third item third subitem first sub-subitem</li>
					<li>Third item third subitem second sub-subitem</li>
					<li>Third item third subitem third sub-subitem
						<ol class="ol ol--nested">
							<li>Third item...</li>
							<li>Third item...</li>
							<li>Third item...</li>
						</ol>
					</li>
				</ol>
			</li>
		</ol>
	</li>
</ol>
`,
};

export const UnorderedLists = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<ul class="ul ul--dashed">
	<li class="text-xs">First item</li>
	<li class="text-sm">Second item</li>
	<li class="text-md">Third item</li>
	<li class="text-lg">Fourth item</li>
	<li class="text-xl">Fifth item</li>
	<li class="text-xxl">Sixth item</li>
</ul>
`,
};

export const UnorderedLists2 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<ul class="ul ul--point">
	<li class="text-xs">First item</li>
	<li class="text-sm">Second item</li>
	<li class="text-md">Third item</li>
	<li class="text-lg">Fourth item</li>
	<li class="text-xl">Fifth item</li>
	<li class="text-xxl">Sixth item</li>
</ul>
`,
};
