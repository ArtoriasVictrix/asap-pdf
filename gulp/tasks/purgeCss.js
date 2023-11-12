// ===============================================
// PURGECSS
// ===============================================


// Node modules
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const { PurgeCSS } = require('purgecss');
const { inlineSource } = require('inline-source');

// Config files
const projectPath = require('../config/projectPath');


module.exports = purgeCss = async () => {
	// TODO: Caching?
	const pages = glob.sync(path.join(projectPath.temp.html, '/**/*.html').replace(/\\/g, '/'));

	if (!pages.length) {
		console.log('❌ HTML files not found.');
		return;
	}

	for (let page of pages) {
		// Purge CSS for the current HTML file
		const purgeCssResults = await new PurgeCSS().purge({
			content: [page],
			css: [projectPath.temp.purgeCss],
		});

		// Inline all resources into the current HTML file
		let html = await inlineSource(page, {
			compress: true,
			rootpath: projectPath.temp.html,
			attribute: false,
		});

		html = html.replace('</head>', `<style>\n${purgeCssResults[0].css}\n</style>\n</head>`);

		const buildPath = path.relative(projectPath.temp.html, page);

		fs.outputFileSync(
			path.join(projectPath.build.html, buildPath),
			html,
			{ 'encoding': 'utf-8' }
		);

		console.log(`✅ PurgeCSS: ${buildPath}`);
	};
};
