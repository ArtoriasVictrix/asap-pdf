const path = require('path');
const fs = require('fs-extra');
const puppeteer = require('puppeteer');

const getExistingDevices = require('./getExistingDevices');
const takeScreenshot = require('./takeScreenshot');

// Puppeteer args
const puppeteerArgs = require('../../../config/puppeteer');


/**
 * @typedef {object} puppeteerReport
 * @property {string[]} createdImages Paths to generated screenshots
 * @property {string[]} createImageErrors Screenshot creation errors
 * @property {string[]} notFoundDevices Emulated Puppeteer devices not found
 */

/**
 * @description Initializes Puppeteer and calls the screenshot function
 * @param {string[]} pages List of pages to take screenshots
 * @param {object} config Screenshot settings
 * @param {boolean} config.emulateDevices Emulating mobile devices in Puppeteer
 * @param {string[]} config.devices List of mobile devices to emulate in Puppeteer
 * @param {boolean} config.testOnPc Creating screenshots on a PC
 * @param {number[]} config.pcWidths List of display resolutions for PC
 * @param {number[]} config.removeOldImages Deleting old images
 * @param {string} dir Directory for saving screenshots
 * @returns {puppeteerReport} Screenshot report
 */
module.exports = runPuppeteer = async (pages, config, dir) => {
	const browser = await puppeteer.launch({
		headless: true,
		args: puppeteerArgs,
	});
	const browserPage = await browser.newPage();

	const emulateDevices = config.emulateDevices;
	const testOnPc = config.testOnPc;
	const pcWidths = config.pcWidths;
	const removeOldImages = config.removeOldImages;

	/** @type {puppeteerReport} */
	const puppeteerReport = {
		createdImages: [],
		createImageErrors: [],
		notFoundDevices: [],
	};

	let devices;
	let existingDevices;

	function addToReport(screenshot) {
		if (screenshot.status) {
			puppeteerReport.createdImages.push(screenshot.path);
		} else {
			puppeteerReport.createImageErrors.push(screenshot.report);
		}
	}

	if (emulateDevices) {
		devices = getExistingDevices(config);
		existingDevices = devices.deviceList;
		puppeteerReport.notFoundDevices = devices.notFoundDevices;
	}

	if (removeOldImages) {
		fs.removeSync(dir);
	}

	fs.mkdirsSync(dir);

	console.log('\nCreating screenshots:');

	for (let page of pages) {
		if (testOnPc) {
			if ((pcWidths ?? []).length > 0) {
				for (let pcWidth of pcWidths) {
					await browserPage.setViewport({
						width: pcWidth,
						height: 0,
					});
					const screenshot = await takeScreenshot(
						page,
						dir,
						browserPage,
						'',
						`-${pcWidth}px`,
					);

					addToReport(screenshot);
				}
			} else {
				console.log('❌ Viewport width is not specified for PC testing');
			}
		}

		if (emulateDevices) {
			if (existingDevices.length > 0) {
				for(let device of existingDevices) {
					fs.mkdirsSync(path.join(dir, device));
					await browserPage.emulate(puppeteer.devices[device]);
					const screenshot = await takeScreenshot(
						page,
						dir,
						browserPage,
						device
					);

					addToReport(screenshot);
				}
			}
		}
	}

	await browser.close();

	return puppeteerReport;
}
