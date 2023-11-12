const path = require('path');


const screenOutputRoot = 'tests/screenshots/';

module.exports = screenshotsConfig = {
	testName: 'Screenshot diffs',
	logoClass: 'logo--screenshot',

	outputRoot: screenOutputRoot,

	srcDir: './dist/',

	testAllPages: true,
	pageList: [
		'index',
	],
	removeOldImages: false,

	beforeDir: path.join(screenOutputRoot, '/before/'),
	afterDir: path.join(screenOutputRoot, '/after/'),
	diffDir: path.join(screenOutputRoot, '/difference/'),

	reportTemplate: 'tests/report-template/report-template.html',
	reportFile: path.join(screenOutputRoot, '../Screenshot test report.html'),

	testOnPc: true,
	pcWidths: [
		1280,
	],

	emulateDevices: false,
};
