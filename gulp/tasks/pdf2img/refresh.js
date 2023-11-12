// ===============================================
// REFRESH GOLDEN IMAGES
// ===============================================


// Node modules
const fs = require('fs-extra');

// Helpers
const getConfig = require('../../helpers/getConfig');

// Config
const pdf2imgConfig = require(getConfig('./test/pdf2img'));


// Move files from afterDir to beforeDir
module.exports = pdf2imgRefresh = (done) => {
	fs.removeSync(pdf2imgConfig.beforeDir);
	fs.moveSync(pdf2imgConfig.afterDir, pdf2imgConfig.beforeDir);
	done();
};
