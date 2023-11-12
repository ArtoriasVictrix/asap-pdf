// ===============================================
// GETTING HTML
// ===============================================


// Node modules
const gulp = require('gulp');
const gulpif = require('gulp-if');
const cheerio = require('gulp-cheerio');
const path = require('path');

// Config files
const projectConfig = require('../helpers/getEnvConfig').getConfigKeys();
const projectPath = require('../config/projectPath');

const env = process.env.NODE_ENV;


module.exports = html = () => {
	return gulp.src(projectPath.src.html)
		/*
			The path to the CSS file should only be specified for a development
			build. The reason for this is that all resources, including CSS, are
			copied to the dist folder in this mode.

			For a production build, all resources, including CSS, are optimized.
			Unused styles are removed using PurgeCSS, and the final version of
			the code is automatically inserted into the style tag.
		*/
		.pipe(gulpif(env !== 'production', cheerio(function($, file) {
				const fileRelPath = file.relative;
				const dirPath = path.parse(fileRelPath).dir;
				let cssPath = '';

				if (dirPath) {
					rootPath = path.parse(fileRelPath).root;
					cssPath = `${path.relative(dirPath, rootPath)}/`.replace(/\\/g, '/');
				}

				$('head').append(`<link rel="stylesheet" href="${cssPath}css/style.css">`);
			})
		))
		.pipe(gulp.dest(projectConfig.tempFolder ? projectPath.temp.html : projectPath.build.html));
};
