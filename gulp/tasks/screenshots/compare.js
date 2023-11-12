// ===============================================
// COMPARE SCREENSHOTS
// ===============================================


// Node modules
const open = require('open');

// Functions
const getSrcPages = require('../../functions/tests/getSrcPages');
const runPuppeteer = require('../../functions/tests/sc/runPuppeteer');
const compareImagesArray = require('../../functions/tests/compareImagesArray');
const createReport = require('../../functions/tests/report/createReport');

// Helpers
const getConfig = require('../../helpers/getConfig');

// Config files
const screenshotsConfig = require(getConfig('./test/sc'));

// Classes
const TestReportData = require('../../helpers/testReportDataClass');


/*
    This function takes screenshots of html files and compares them to "golden"
    screenshots that were taken earlier.
*/
module.exports = screenshotsCompare = async () => {
	let scTestData = new TestReportData();
	const pages = getSrcPages(screenshotsConfig);
	let puppeteerReport;

	if (pages.length) {
		puppeteerReport = await runPuppeteer(
			pages,
			screenshotsConfig,
			screenshotsConfig.afterDir,
		);

		scTestData.notFoundDevices = puppeteerReport.notFoundDevices;
		scTestData.createImageErrors = puppeteerReport.createImageErrors;

		const createdImages = puppeteerReport.createdImages;

		if (createdImages.length > 0) {
			console.log('\n👀 Screenshot comparison:');

			const comparisonResults = await compareImagesArray(createdImages, screenshotsConfig);

			scTestData.pages = comparisonResults.pages;
			scTestData.notFoundGolden = comparisonResults.notFoundGolden;
			scTestData.notFoundActual = comparisonResults.notFoundActual;
			scTestData.compareErrors = comparisonResults.compareErrors;

			await createReport(screenshotsConfig, scTestData);

			open(screenshotsConfig.reportFile);
		} else {
			console.log(`❌ No screenshots to compare (${screenshotsConfig.afterDir}).`);
		}
	}
};
