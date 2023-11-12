fs = require('fs-extra');
path = require('path');


/**
 * @description Checks whether a file exists at the given path. If the file does not exist, it returns the path with a '.default' postfix
 * @param {string} configPath Path to the file to be checked
 * @returns {string} Path to the file
 */
module.exports = getConfig = (configPath) => {
	if (!configPath.endsWith('.js')) {
		configPath = `${configPath}.js`;
	}

	configPath = path.resolve(path.join('./gulp/config/', configPath));

	const configExists = fs.existsSync(configPath);

	if (configExists) {
		return configPath;
	} else {
		return `${configPath.slice(0, -3)}.default.js`;
	}
};
