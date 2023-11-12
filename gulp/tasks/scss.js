// ===============================================
// STYLES
// ===============================================


// Node modules
const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const gulpScss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

// Helpers
const onError = require('../helpers/onError');
const browserSyncInstance = require('../helpers/getBrowserSyncInstance');

// Config files
const projectConfig = require('../helpers/getEnvConfig').getConfigKeys();
const projectPath = require('../config/projectPath');


module.exports = scss = () => {
	const cleanCssOptions = {};
	let scssDest;

	if (process.env.STORYBOOK) {
		scssDest = projectPath.storybook.scss;
	} else {
		scssDest = projectConfig.tempFolder ? projectPath.temp.scss : projectPath.build.scss;
	}

	if (!projectConfig.scssUglify) {
		cleanCssOptions.format = 'beautify';
	}

	return gulp.src(projectPath.src.scss)
		.pipe(gulpif(projectConfig.usePlumber, plumber({ errorHandler: onError })))
		.pipe(gulpif(projectConfig.scssSourcemaps, sourcemaps.init()))
		.pipe(gulpScss())
		.pipe(gulpif(projectConfig.scssAutoprefix, autoprefixer({ cascade: false })))
		.pipe(cleanCSS(cleanCssOptions))
		.pipe(gulpif(projectConfig.scssConcat, concat(projectConfig.scssConcatFilename)))
		.pipe(gulpif(projectConfig.scssSourcemaps, sourcemaps.write(projectPath.scssSourcemaps)))
		.pipe(gulp.dest(scssDest))
		.pipe(browserSyncInstance.stream());
};
