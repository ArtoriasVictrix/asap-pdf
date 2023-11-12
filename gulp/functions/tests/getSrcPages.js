const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');


/**
 * @description Checks if there are pages to test and collects them into an array
 * @param {object} testConfig Check settings
 * @param {string} testConfig.srcDir Folder to check
 * @param {boolean} testConfig.testAllPages Checking all pages (true) or a specific list of pages (false)
 * @param {string[]} testConfig.pageList List of individual pages to check
 * @param {string} [ext=html] File format to check
 * @returns {array} List of pages to test
 */
module.exports = getSrcPages = (testConfig, ext = 'html') => {
	const srcDir = testConfig.srcDir;
	const testAllPages = testConfig.testAllPages;
	let pageList = testConfig.pageList;

	const checkFileList = fileList => {
		if (!fileList.length) {
			console.log(`❌ Specified pages are not found in ${srcDir}`);
		}
		return fileList;
	};

	// A missing source file folder renders all further checks meaningless
	if (fs.existsSync(srcDir)) {

		// If you test all pages in the directory
		if (testAllPages) {
			return checkFileList(
				glob.sync(path.join(srcDir, `/**/*.${ext}`).replace(/\\/g, '/'))
					.map(file => path.relative(srcDir, file))
			);

		// If you test pages from the list
		} else if ((pageList ?? []).length > 0) {
			pageList = pageList.map(file => file.endsWith(`.${ext}`) ? file : `${file}.${ext}`);

			return checkFileList(pageList.map(file => {
				const fileExists = fs.existsSync(path.join(srcDir, file));

				if (fileExists) {
					return file;
				}

				console.warn(`${file} - does not exist in ${srcDir}`);
				return;
			}));

		} else {
			console.error('❌ No pages set for testing');
			return [];
		}

	} else {
		console.log(`❌ Folder ${srcDir} does not exist`);
		return [];
	}
}
