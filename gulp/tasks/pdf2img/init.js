// ===============================================
// CONVERT PDF TO PNG
// ===============================================


// Functions
const getSrcPages = require('../../functions/tests/getSrcPages');
const pdf2img = require('../../functions/tests/pdf2img/pdf2img');

// Helpers
const getConfig = require('../../helpers/getConfig');

// Config
const pdf2imgConfig = require(getConfig('./test/pdf2img'));


// Convert PDF to PNG
module.exports = pdf2imgInit = async () => {
	const pages = getSrcPages(pdf2imgConfig, 'pdf');

	if (pages.length) {
		await pdf2img(
			pages,
			pdf2imgConfig,
			pdf2imgConfig.beforeDir
		);
	}
};
