// ===============================================
// PUG / JADE
// ===============================================


// Node modules
const gulp = require('gulp');
const gulpif = require('gulp-if');
const cache = require('gulp-cached');
const plumber = require('gulp-plumber');
const gulpPug = require('gulp-pug');
const beautify = require('gulp-beautify');

// Helpers
const onError = require('../helpers/onError');

// Config files
const projectConfig = require('../helpers/getEnvConfig').getConfigKeys();
const projectPath = require('../config/projectPath');


module.exports = pug = () => {
	return gulp.src(
			projectPath.src.pug,
			{
				dot: true,
				ignore: projectPath.src.pugIgnore,
				since: gulp.lastRun(pug)
			}
		)
		.pipe(cache('pug'))
		.pipe(gulpif(projectConfig.usePlumber, plumber({ errorHandler: onError })))
		.pipe(gulpPug({
			pretty: projectConfig.pugPrettify,
		}))
		.pipe(gulpif(projectConfig.pugPrettify, beautify.html({ 'indent_with_tabs': true })))
		.pipe(gulp.dest(projectConfig.tempFolder ? projectPath.temp.pug : projectPath.build.pug));
};
