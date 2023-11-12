// ===============================================
// BROWSERSYNC SERVER
// ===============================================


const browserSyncInstance = require('../helpers/getBrowserSyncInstance');
const browserSyncConfig = require('../config/server');

const browserSyncServer = () => browserSyncInstance.init(browserSyncConfig);

const browserSyncReload = (done) => {
	browserSyncInstance.reload();
	done();
};

module.exports = {
	browserSyncServer,
	browserSyncReload,
};
