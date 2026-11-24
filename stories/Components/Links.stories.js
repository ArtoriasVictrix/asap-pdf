export default {
	title: 'Components/Links',
};

export const Default = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<p>Do you know what this is? It’s <a href="#">a link</a>!</p>
`,
};

export const ToDisplayTheURL = {
	// Hidden from the sidebar: the example lives inside the MDX documentation page
	tags: ['!dev'],
	render: () => `
<p>Do you know what it is? It’s <a class="link link--printable" href="https://validator.w3.org/">a link</a>!</p>
`,
};
