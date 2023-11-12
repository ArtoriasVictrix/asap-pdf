// ===============================================
// REFRESH GOLDEN SCREENSHOTS
// ===============================================


// Node modules
const fs = require('fs-extra');

// Helpers
const getConfig = require('../../helpers/getConfig');

// Config
const screenshotsConfig = require(getConfig('./test/sc'));


// Move files from afterDir to beforeDir
module.exports = screenshotsRefresh = (done) => {
	fs.removeSync(screenshotsConfig.beforeDir);
	fs.moveSync(screenshotsConfig.afterDir, screenshotsConfig.beforeDir);
	done();
};
