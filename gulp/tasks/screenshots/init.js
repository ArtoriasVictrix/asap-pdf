// ===============================================
// CREATE GOLDEN SCREENSHOTS
// ===============================================


// Functions
const getSrcPages = require('../../functions/tests/getSrcPages');
const runPuppeteer = require('../../functions/tests/sc/runPuppeteer');

// Helpers
const getConfig = require('../../helpers/getConfig');

// Config
const screenshotsConfig = require(getConfig('./test/sc'));


/*
	This function takes golden screenshots of html files for comparison with
	new screenshots in the future.
*/
module.exports = screenshotsInit = async () => {
	const pages = getSrcPages(screenshotsConfig);

	if (pages.length) {
		await runPuppeteer(
			pages,
			screenshotsConfig,
			screenshotsConfig.beforeDir
		);
	}
};
