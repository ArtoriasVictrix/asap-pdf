// ===============================================
// COMPARE PNG IMAGES
// ===============================================


// Node modules
const open = require('open');

// Functions
const getSrcPages = require('../../functions/tests/getSrcPages');
const pdf2img = require('../../functions/tests/pdf2img/pdf2img');
const compareImagesArray = require('../../functions/tests/compareImagesArray');
const createReport = require('../../functions/tests/report/createReport');

// Helpers
const getConfig = require('../../helpers/getConfig');

// Config files
const pdf2imgConfig = require(getConfig('./test/pdf2img'));

// Classes
const TestReportData = require('../../helpers/testReportDataClass');


/*
    This function creates images from PDFs and compares them to golden images
    that were created earlier.
*/
module.exports = pdf2imgCompare = async () => {
	const pdfTestData = new TestReportData();
	const pages = getSrcPages(pdf2imgConfig, 'pdf');
	let pdf2imgReport;

	if (pages.length) {
		console.log('\nCreating PNG from PDF:');

		pdf2imgReport = await pdf2img(
			pages,
			pdf2imgConfig,
			pdf2imgConfig.afterDir
		);

		pdfTestData.createImageErrors = pdf2imgReport.createImageErrors;

		const createdImages = pdf2imgReport.createdImages;

		if (createdImages.length > 0) {
			console.log('\n👀 Comparing PNG:');

			const comparisonResults = await compareImagesArray(createdImages, pdf2imgConfig);

			pdfTestData.pages = comparisonResults.pages;
			pdfTestData.notFoundGolden = comparisonResults.notFoundGolden;
			pdfTestData.notFoundActual = comparisonResults.notFoundActual;
			pdfTestData.compareErrors = comparisonResults.compareErrors;

			await createReport(pdf2imgConfig, pdfTestData);

			open(pdf2imgConfig.reportFile);
		} else {
			console.log(`❌ No images to compare (${pdf2imgConfig.afterDir}).`);
		}
	}
};
