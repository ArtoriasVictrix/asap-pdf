// ===============================================
// MOCK DATA
// ===============================================


// Node modules
const gulp = require('gulp');
const tap = require('gulp-tap');
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const cheerio = require('cheerio');

// Config files
const projectPath = require('../config/projectPath');


module.exports = mock = () => {
	return gulp.src(projectPath.src.mockHtml)
		.pipe(tap((file) => {
			file = file.relative;
			const mocks = glob.sync(projectPath.src.mock.replace(/\\/g, '/'));

			if (!file) {
				console.log('❌ No HTML to mock.');
				return;
			}

			if (!mocks.length) {
				console.log('❌ Mocks not found.');
				return;
			}

			for (let mock of mocks) {
				mockName = path.basename(mock).split('.').slice(0, -1).join('.');
				mock = JSON.parse(fs.readFileSync(mock));

				const $ = cheerio.load(fs.readFileSync(path.join(projectPath.build.html, file))).html();
				let replaced = $;

				for (key in mock) {
					const searchRegExp = new RegExp(key, 'g');
					replaced = replaced.replace(searchRegExp, mock[key]);
				}

				fs.outputFileSync(
					path.join(
						projectPath.build.mock,
						mockName,
						file
					),
					replaced,
					{ 'encoding': 'utf-8' }
				);

				console.log(`✅ Mocked: ${mockName} ${file}`);
			}
		}));
};
