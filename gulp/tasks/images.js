// ===============================================
// IMAGES
// ===============================================


// Node modules
const gulp = require('gulp');
const gulpif = require('gulp-if');
const cache = require('gulp-cached');
const minifyIMG = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

// Config files
const projectConfig = require('../helpers/getEnvConfig').getConfigKeys();
const projectPath = require('../config/projectPath');


module.exports = images = () => {
	return gulp.src(projectPath.src.img)
		.pipe(cache('Image optimization'))
		.pipe(gulpif(projectConfig.minifyImg, minifyIMG({
			verbose: true,
			use: [pngquant()],
			svgoPlugins: [{ removeViewBox: false }],
		})))
		.pipe(gulp.dest(projectConfig.tempFolder ? projectPath.temp.img : projectPath.build.img));
};
