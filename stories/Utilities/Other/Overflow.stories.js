export default {
	title: 'Utilities/Other/Overflow',
};

export const Story1 = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="d-flex text-lg">
	<div class="ov-auto bg-light p-8 mb-8" style={{ 'max-width': '170px', 'max-height': '100px' }}>
		This is an example of using <code>.ov-auto</code> on an element with set width and height dimensions. By design,
		this content will vertically scroll.
	</div>
	<div class="ov-hidden bg-light p-8 mb-8" style={{ 'max-width': '170px', 'max-height': '100px' }}>
		This is an example of using <code>.ov-hidden</code> on an element with set width and height dimensions.
	</div>
	<div class="ov-visible bg-light p-8 mb-8" style={{ 'max-width': '170px', 'max-height': '100px' }}>
		This is an example of using <code>.ov-visible</code> on an element with set width and height dimensions.
	</div>
	<div class="ov-scroll p-8 bg-light" style={{ 'max-width': '170px', 'max-height': '100px' }}>
		This is an example of using <code>.ov-scroll</code> on an element with set width and height dimensions.
	</div>
</div>
`,
};

export const OverflowXAndOverflowY = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<div class="ov-x-hidden ov-y-scroll text-nowrap" style={{height: '80px', width: '50%'}}>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<p>Sunt possimus modi ducimus at corrupti inventore, excepturi,</p>
	<p>eum atque quae aperiam nostrum assumenda reprehenderit similique enim!</p>
	<p>Iusto adipisci, voluptatum pariatur illum tempore neque eligendi mollitia?</p>
	<p>Itaque dolores explicabo sunt accusantium ipsa?</p>
</div>
`,
};
