// ===============================================
// ENCODE RESOURCES WITH BASE64
// ===============================================


// Node modules
const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpCssBase64 = require('gulp-css-base64');

// Config files
const projectPath = require('../config/projectPath');


/*
	This task converts all data found within a CSS into base64-encoded
	data URI strings
*/
module.exports = cssBase64 = () => {
	return gulp.src(projectPath.temp.cssBase64)
		.pipe(gulpCssBase64({
			maxWeightResource: 3145728, // 3MB
		}))
		.pipe(rename(path => path.basename += '.b64'))
		.pipe(gulp.dest(projectPath.temp.scss));
};
