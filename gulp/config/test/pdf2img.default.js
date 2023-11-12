const path = require('path');


const pdfOutputRoot = 'tests/pdf2img/';

module.exports = pdfToImgConfig = {
	testName: 'Pdf2img diffs',
	logoClass: 'logo--pdf',

	srcDir: './dist/pdf/',

	testAllPages: true,
	pageList: [
		'index',
	],
	removeOldImages: false,

	outputRoot: pdfOutputRoot,

	tempDir: path.join(pdfOutputRoot, '/temp/'),
	beforeDir: path.join(pdfOutputRoot, '/before/'),
	afterDir: path.join(pdfOutputRoot, '/after/'),
	diffDir: path.join(pdfOutputRoot, '/difference/'),

	reportTemplate: 'tests/report-template/report-template.html',
	reportFile: path.join(pdfOutputRoot, '../PDF test report.html'),
};
