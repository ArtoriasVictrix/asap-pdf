// ===============================================
// CLEANING :-)
// ===============================================


// Node modules
const fs = require('fs-extra');

// Config files
const projectPath = require('../config/projectPath');


// Removing dist and temp folders
module.exports = clean = done => {
	if (Array.isArray(projectPath.clean)) {
		projectPath.clean.forEach(folder => fs.removeSync(folder));
	} else {
		fs.removeSync(projectPath.clean);
	}
	done();
};
