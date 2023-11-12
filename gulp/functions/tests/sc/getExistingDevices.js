const puppeteer = require('puppeteer');


/**
 * @typedef {object} devices Stores information about devices
 * @property {string[]} deviceList List of found devices
 * @property {string[]} notFoundDevices List of devices not found in Puppeteer
 */

/**
 * @description Checks if the listed devices exist in Puppeteer
 * @param {object} testConfig Object with a list of devices
 * @param {string[]} testConfig.devices List of devices to check
 * @returns {devices} List of found and missing devices
 */
module.exports = getExistingDevices = (testConfig) => {
	if ((testConfig.devices ?? []).length > 0) {
        const notFoundDevices = [];

		const deviceList = testConfig.devices.filter(device => {
			const deviceExists = puppeteer.devices[device];

			if (!deviceExists) {
				// If there is no device in the array yet, add a device to it
				if (!notFoundDevices.includes(device)){
					notFoundDevices.push(device);
				}

				console.warn(`📵 ${device} - device not found in Puppeteer`);
			}

			return deviceExists;
		});

		if (!(deviceList.length > 0)) {
			console.log(`❌ Specified devices not found in Puppeteer`);
		}

		return {
            deviceList,
            notFoundDevices
        };
	} else {
		console.error('❌ No devices set for testing');
		return {};
	}
}
