// ===============================================
// JAVASCRIPT
// ===============================================


// Node modules
const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Config files
const projectPath = require('../config/projectPath');
const projectConfig = require('../helpers/getEnvConfig').getConfigKeys();


module.exports = scripts = () => {
	return gulp.src(projectPath.src.js)
		.pipe(gulpif(projectConfig.usePlumber, plumber()))
		.pipe(gulpif(projectConfig.jsSourcemaps, sourcemaps.init()))
		.pipe(gulpif(projectConfig.jsBabel,
			babel({
				presets: ["@babel/preset-env"]
			})
		))
		.pipe(gulpif(projectConfig.jsUglify, uglify()))
		.pipe(gulpif(projectConfig.jsSourcemaps, sourcemaps.write(projectPath.jsSourcemaps)))
		.pipe(gulp.dest(projectConfig.tempFolder ? projectPath.temp.js : projectPath.build.js));
};
