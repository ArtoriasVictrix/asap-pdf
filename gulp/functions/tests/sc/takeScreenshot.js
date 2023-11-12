const fs = require('fs-extra');
const path = require('path');
const serverConfig = require('../../../config/server');


/**
 * @typedef {object} screenshotReport Stores information about creating a screenshot
 * @property {string} path Path to the generated screenshot
 * @property {boolean} status Screenshot status (created or not)
 * @property {string} report Screenshot error message
 */

/**
 * @description Creates a screenshot
 * @param {string} pageName File (page) name
 * @param {string} directory Path to the file (page)
 * @param {object} page Page object from Puppeteer
 * @param {string} device Name of the device emulated in Puppeteer (used in the folder name)
 * @param {string} [pagePostfix=''] Postfix for screenshot name
 * @returns {screenshotReport} Screenshot creation report
 */
module.exports = takeScreenshot = async (pageName, directory, page, device, pagePostfix = '') => {
	pageName = pageName.split('.html')[0];

	const pageFolder = `${pageName}.html`.split(path.basename(`${pageName}.html`))[0];
	const screenshotPath = path.join(directory, device, `${pageName}${pagePostfix}.png`);
	const logFileName = `${pageName}${pagePostfix}.png${(device === '') ? '' : ` (${device})`}`;

	if (pageFolder) {
		fs.mkdirsSync(path.join(directory, device, pageFolder));
	}

	await page.goto(
		`http://localhost:${serverConfig.port}/${pageName}.html`,
		{ waitUntil: 'networkidle0' },
	);

	try {
		await page.screenshot({
			path: screenshotPath,
			fullPage: true,
		});

		console.log(`✅ screenshot: ${logFileName}`);

		return {
			path: screenshotPath,
			status: true,
			report: '',
		};
	} catch (err) {
		console.error(`${logFileName}: Error generating screenshot.\n${err.message}\n`);

		return {
			path: screenshotPath,
			status: false,
			report: `${logFileName}: Error generating screenshot.\n${err.message}`,
		};
	}
}
