// ===============================================
// CONVERTING HTML TO PDF
// ===============================================


// Node modules
const gulp = require('gulp');
const cache = require('gulp-cached');
const path = require('path');
const fs = require('fs-extra');
const tap = require('gulp-tap');
const puppeteer = require('puppeteer');

// Helpers
const getConfig = require('../helpers/getConfig');

// HTML to PDF conversion settings
const html2pdfConfig = require(getConfig('./html2pdfConfig'));

// Config files
const puppeteerArgs = require('../config/puppeteer');
const projectPath = require('../config/projectPath');
const serverConfig = require('../config/server');


module.exports = html2Pdf = async (done) => {
	let files = new Set();
	let filesToConvert = [];
	let pageList;

	await new Promise(function(resolve){
		gulp.src([
				projectPath.src.pdf,
				projectPath.src.pdfConfig,
			])
			.pipe(cache('PDF generation'))
			.pipe(tap(file => {
				if (file.relative.endsWith('.js')) {
					files.add(`${file.relative.slice(0, -3)}.html`);
				} else {
					files.add(file.relative);
				}
			}))
			// https://github.com/gulpjs/gulp/issues/1637#
			.on('data', () => {})
			.on('finish', () => {
				resolve();
			});
	});

	if (!!files.length) {
		console.log('📄 PDF: no changes.');
		return done();
	}

	files = Array.from(files);

	if (html2pdfConfig.convertAll) {
		filesToConvert = files;
	} else {
		pageList = html2pdfConfig.pageList;

		if ((pageList ?? []).length) {
			pageList = pageList.map(page => page.endsWith('.html') ? page : `${page}.html`);

			files.forEach(file => {
				if (pageList.includes(file)) {
					filesToConvert.push(file);
				}
			});
		} else {
			console.error('❌ No pageList array to convert');
			return done();
		}
	}


	const browser = await puppeteer.launch({
		headless: true,
		args: puppeteerArgs,
	});
	let page = await browser.pages();
	page = page[0];

	fs.mkdirsSync(projectPath.build.pdf);

	for (let file of filesToConvert) {
		const folder = path.parse(file).dir;

		if (folder) {
			fs.mkdirsSync(path.join(projectPath.build.pdf, folder));
		}

		// Default pdf settings
		let pdfSettings = {};
		let pdfSettingsPath = path.join(projectPath.pdfSettings, `${file.slice(0, -4)}js`);

		// Get custom pdf settings if it exists
		if (fs.existsSync(pdfSettingsPath)) {
			const configPath = path.join('../../', pdfSettingsPath);

			delete require.cache[require.resolve(configPath)];
			pdfSettings = require(configPath);
		}

		await page.goto(`http://localhost:${serverConfig.port}/${file}`, { waitUntil: 'networkidle2' });
		await page.pdf({
			path: path.join(projectPath.build.pdf, file.replace('.html', '.pdf')),
			preferCSSPageSize: true,
			printBackground: true,
			...pdfSettings,
		});

		console.log(`✅ PDF: ${file.split('.html')[0]}`);
	}

	console.log('📄 PDF: done!');
	await browser.close();

	done();
};
