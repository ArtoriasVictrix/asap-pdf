// ===============================================
// WATCH
// ===============================================


// Node modules
const gulp = require('gulp');

// Project paths
const projectPath = require('../config/projectPath');


// Gulp tasks
const scss = require('./scss');
const cssBase64 = require('./cssBase64');
const images = require('./images');
const fonts = require('./fonts');
const libs = require('./libs');
const scripts = require('./scripts');
const html = require('./html');
const pug = require('./pug');
const purgeCss = require('./purgeCss');
const mock = require('./mock');
const html2pdf = require('./html2pdf');
const browserSyncReload = require('./server').browserSyncReload;


// DEVELOPMENT
// -----------------------------------------------

const watchDev = (done) => {
	gulp.watch(projectPath.watch.img, gulp.series(images, browserSyncReload));
	gulp.watch(projectPath.watch.fonts, gulp.series(fonts, browserSyncReload));
	gulp.watch(projectPath.watch.libs, gulp.series(libs, browserSyncReload));
	gulp.watch(projectPath.watch.js, gulp.series(scripts, browserSyncReload));
	gulp.watch(projectPath.watch.html, gulp.series(html, browserSyncReload));
	gulp.watch(projectPath.watch.pug, gulp.series(pug, browserSyncReload));
	gulp.watch(projectPath.watch.scss, gulp.series(scss));

	if (process.env.PDF)  {
		gulp.watch(projectPath.watch.pdf, gulp.series(html2pdf));
	}

	done();
};

// -----------------------------------------------
// DEVELOPMENT


// PRODUCTION
// -----------------------------------------------

const watchProd = (done) => {
	gulp.watch(projectPath.watch.img, gulp.series(
		images,
		cssBase64,
		purgeCss,
		browserSyncReload,
	));
	gulp.watch(projectPath.watch.fonts, gulp.series(
		fonts,
		cssBase64,
		purgeCss,
		browserSyncReload,
	));
	gulp.watch(projectPath.watch.libs, gulp.series(
		libs,
		purgeCss,
		browserSyncReload,
	));
	gulp.watch(projectPath.watch.js, gulp.series(
		scripts,
		purgeCss,
		browserSyncReload,
	));
	gulp.watch(projectPath.watch.html, gulp.series(
		html,
		purgeCss,
		browserSyncReload,
	));
	gulp.watch(projectPath.watch.pug, gulp.series(
		pug,
		cssBase64,
		purgeCss,
		browserSyncReload,
	));
	gulp.watch(projectPath.watch.scss, gulp.series(
		scss,
		cssBase64,
		purgeCss,
	));

	if (process.env.MOCK)  {
		gulp.watch(projectPath.watch.mock,
			gulp.series(
				mock,
				browserSyncReload,
			),
		);
	}

	if (process.env.PDF)  {
		gulp.watch(projectPath.watch.pdfProd, gulp.series(html2pdf));
	}

	done();
};

// -----------------------------------------------
// PRODUCTION


module.exports = {
	watchDev,
	watchProd,
};
