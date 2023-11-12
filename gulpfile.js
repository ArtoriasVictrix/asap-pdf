'use strict';

const gulp = require('gulp'),
	  glob = require('glob');

// Gulp tasks
const clean = require('./gulp/tasks/clean'),
	  scss = require('./gulp/tasks/scss'),
	  cssBase64 = require('./gulp/tasks/cssBase64'),
	  images = require('./gulp/tasks/images'),
	  fonts = require('./gulp/tasks/fonts'),
	  libs = require('./gulp/tasks/libs'),
	  scripts = require('./gulp/tasks/scripts'),
	  html = require('./gulp/tasks/html'),
	  pug = require('./gulp/tasks/pug'),
	  purgeCss = require('./gulp/tasks/purgeCss'),
	  mock = require('./gulp/tasks/mock'),
	  html2pdf = require('./gulp/tasks/html2pdf'),
	  screenshotsInit = require('./gulp/tasks/screenshots/init'),
	  screenshotsCompare = require('./gulp/tasks/screenshots/compare'),
	  screenshotsRefresh = require('./gulp/tasks/screenshots/refresh'),
	  pdf2imgInit = require('./gulp/tasks/pdf2img/init'),
	  pdf2imgCompare = require('./gulp/tasks/pdf2img/compare'),
	  pdf2imgRefresh = require('./gulp/tasks/pdf2img/refresh'),
	  watchDev = require('./gulp/tasks/watch').watchDev,
	  watchProd = require('./gulp/tasks/watch').watchProd;


// Server
const browserSync = require('./gulp/tasks/server').browserSyncServer;

gulp.task('browser-sync', done => {
	browserSync();
	done();
});



// ===============================================
// BUILD PROJECT
// ===============================================


// DEVELOPMENT
// -----------------------------------------------

gulp.task('build:dev', gulp.series(
	clean,
	gulp.parallel(
		images,
		fonts,
		libs,
		scripts,
		pug,
		html,
		scss,
	),
));

// -----------------------------------------------
// DEVELOPMENT


// PRODUCTION
// -----------------------------------------------

let buildProdTasks = [
	clean,
	gulp.parallel(
		images,
		fonts,
		libs,
		scripts,
		pug,
		html,
		scss,
	),
	cssBase64,
	purgeCss,
];

if (process.env.MOCK) {
	buildProdTasks.push(mock);
}

gulp.task('build', gulp.series(
	...buildProdTasks,
));

// -----------------------------------------------
// PRODUCTION



// ===============================================
// DEV / PROD MODES
// ===============================================


const prodParallelTasks = [
	watchProd,
];
const devParallelTasks = [
	watchDev,
];

if (process.env.PDF) {
	prodParallelTasks.unshift(html2pdf);
}

if (process.env.PDF) {
	devParallelTasks.unshift(html2pdf);
}

const tasks = {
	production: gulp.series(
		'build',
		'browser-sync',
		gulp.parallel(prodParallelTasks),
	),
	development: gulp.series(
		'build:dev',
		'browser-sync',
		gulp.parallel(devParallelTasks),
	),
};


module.exports = {
	default: tasks[process.env.NODE_ENV],
	fonts: fonts,
	scss: scss,
	mock: mock,
	html2pdf: html2pdf,
	screenshotsInit: screenshotsInit,
	screenshotsCompare: screenshotsCompare,
	screenshotsRefresh: screenshotsRefresh,
	pdf2imgInit: pdf2imgInit,
	pdf2imgCompare: pdf2imgCompare,
	pdf2imgRefresh: pdf2imgRefresh,
	clean: clean,
};
