// ===============================================
// IMAGES
// ===============================================


// Node modules
const gulp = require('gulp');
const gulpif = require('gulp-if');
const cache = require('gulp-cached');
const sharp = require('sharp');
const through2 = require('through2').default; // ESM-first package: under CJS the function is available via .default

// Config files
const projectConfig = require('../helpers/getEnvConfig').getConfigKeys();
const projectPath = require('../config/projectPath');


// Image optimization via sharp
// SVG files are skipped: sharp cannot save vector data
const optimizeImg = () => through2.obj(function (file, enc, done) {
	if (file.isStream()) {
		done(new Error('Streams are not supported'));
		return;
	}
	if (!file.isBuffer()) {
		done(null, file);
		return;
	}

	sharp(file.contents)
		.metadata()
		.then(metadata => {
			if (metadata.format === 'svg') {
				done(null, file);
				return;
			}

			const formatOptions = {
				jpeg: { quality: 82, mozjpeg: true },
				png: { compressionLevel: 9 },
				webp: { quality: 82 },
				avif: { quality: 60 },
			}[metadata.format] || {};

			return sharp(file.contents)
				.toFormat(metadata.format, formatOptions)
				.toBuffer()
				.then(data => {
					file.contents = data;
					done(null, file);
				});
		})
		// Skip non-images and broken files without stopping the build
		.catch(err => {
			console.warn(`⚠️  ${file.path} — skipped (sharp error: ${err.message})`);
			done(null, file);
		});
});


module.exports = images = () => {
	// encoding: false is required for binary files in Gulp 5
	// (by default vinyl-fs 4 reads files as UTF-8 and corrupts binaries)
	return gulp.src(projectPath.src.img, { encoding: false })
		.pipe(cache('Image optimization'))
		.pipe(gulpif(projectConfig.minifyImg, optimizeImg()))
		.pipe(gulp.dest(projectConfig.tempFolder ? projectPath.temp.img : projectPath.build.img));
};
