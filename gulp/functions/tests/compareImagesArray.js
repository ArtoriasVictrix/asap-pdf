const path = require('path');
const fs = require('fs-extra');
const puppeteer = require('puppeteer');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');


/*
	Author: Jest-image-snapshot by American Express
	https://github.com/americanexpress/jest-image-snapshot
	https://github.com/americanexpress/jest-image-snapshot/pull/42/files
*/
const createImageResizer = (width, height) => (source) => {
	const resized = new PNG({ width, height, fill: true });
	PNG.bitblt(source, resized, 0, 0, source.width, source.height, 0, 0);
	return resized;
};


/*
	Author: Jest-image-snapshot by American Express
	https://github.com/americanexpress/jest-image-snapshot
	https://github.com/americanexpress/jest-image-snapshot/pull/42/files
*/
const fillSizeDifference = (width, height) => (image) => {
	const inArea = (x, y) => y > height || x > width;
		for (let y = 0; y < image.height; y++) {
		for (let x = 0; x < image.width; x++) {
			if (inArea(x, y)) {
				const idx = ((image.width * y) + x) << 2;
				image.data[idx] = 0;
				image.data[idx + 1] = 0;
				image.data[idx + 2] = 0;
				image.data[idx + 3] = 64;
			}
		}
	}
	return image;
};


/*
	Author: Jest-image-snapshot by American Express
	https://github.com/americanexpress/jest-image-snapshot
	https://github.com/americanexpress/jest-image-snapshot/pull/42/files

	Aligns images sizes to biggest common value
	and fills new pixels with transparent pixels
*/
const alignImagesToSameSize = (firstImage, secondImage) => {
	// Keep original sizes to fill extended area later
	const firstImageWidth = firstImage.width;
	const firstImageHeight = firstImage.height;
	const secondImageWidth = secondImage.width;
	const secondImageHeight = secondImage.height;

	// Calculate biggest common values
	const resizeToSameSize = createImageResizer(
		Math.max(firstImageWidth, secondImageWidth),
		Math.max(firstImageHeight, secondImageHeight)
	);

  	// Resize both images
	const resizedFirst = resizeToSameSize(firstImage);
	const resizedSecond = resizeToSameSize(secondImage);

	// Fill resized area with black transparent pixels
	return [
		fillSizeDifference(firstImageWidth, firstImageHeight)(resizedFirst),
		fillSizeDifference(secondImageWidth, secondImageHeight)(resizedSecond),
	];
};


/**
 * @typedef {object} report
 * @property {object} pages Pages compared
 * @property {string[]} notFoundGolden Paths to missing golden screenshots
 * @property {string[]} notFoundActual Paths to missing actual screenshots
 * @property {string[]} compareErrors Image comparison errors
 */

/**
 * @description Compares images
 * @param {string} file Path to the image for comparison
 * @param {object} config Image comparison settings
 * @param {string} config.afterDir Directory of actual images
 * @param {string} config.beforeDir Directory of golden images
 * @param {string} config.diffDir Directory with comparison results (image files)
 * @param {boolean} config.testOnPc Creating screenshots on a PC
 * @param {number[]} config.pcWidths List of display resolutions for PC
 * @returns {Promise<report>} Object with the image comparison result
 */
const compareImages = (file, config) => {
	return new Promise((resolve) => {
		// Config
		const afterDir = config.afterDir;
		const beforeDir = config.beforeDir;
		const diffDir = config.diffDir;
		const testOnPc = config.testOnPc;
		const pcWidths = config.pcWidths;

		// File paths
		file = path.relative(afterDir, file);
		let fileNoExt = file.replace('.png', '');
		let fileNameLog = fileNoExt;
		const fileDir = file.split(path.basename(file))[0];
		const fileAfter = path.join(afterDir, file);
		const fileBefore = path.join(beforeDir, file);
		const fileDiffs = path.join(diffDir, file);

		// Report data
		/** @type {report} */
		const report = {
			pages: {},
			notFoundGolden: [],
			notFoundActual: [],
			compareErrors: [],
		};

		// Device variables
		const puppeteerDevices = puppeteer.devices;
		let device = '';
		let pageWidth = '';
		let pageWidthPostfix = '';

		// Find device name in file path
		for (puppeteerDevice in puppeteerDevices) {
			const deviceRegexp = new RegExp(`([\\/\\\\]|^)${puppeteerDevices[puppeteerDevice].name}[\\/\\\\]`, 'g');
			deviceFound = fileNoExt.search(deviceRegexp);

			if (deviceFound >= 0) {
				device = puppeteerDevices[puppeteerDevice].name;
				break;
			}
		}

		if (device) {
			fileNoExt = fileNoExt.split(device + path.sep)[1];
			fileNameLog = fileNoExt;
		}

		// Preparing a filename for console logs
		fileNameLog = `${fileNameLog}${(device === '') ? '' : ' (' + device + ')'}`;


		// Working with a postfix (screen width) from the filename
		if (testOnPc && (pcWidths ?? []).length > 0) {
			for (let pcWidth of pcWidths) {
				if (fileNoExt.includes(`-${pcWidth}px`)) {
					pageWidthPostfix = fileNoExt.substring(fileNoExt.lastIndexOf('-'));
					pageWidth = `, ${pageWidthPostfix.split('-')[1]}`;
					fileNoExt = fileNoExt.substring(0, fileNoExt.lastIndexOf('-'));
					break;
				}
			}
		}


		if (fileDir) {
			fs.mkdirsSync(path.join(diffDir, fileDir));
		}

		const img1Exists = fs.existsSync(fileAfter);
		const img2Exists = fs.existsSync(fileBefore);

		if (!img1Exists) {
			report.notFoundActual.push(fileAfter);
			console.log(`❌ Screenshot '${fileAfter}' is missing`);
		}

		if (!img2Exists) {
			report.notFoundGolden.push(fileBefore);
			console.log(`❌ Golden screenshot '${fileBefore}' is missing`);
		}

		if (img1Exists && img2Exists) {
			/*
				Author: Monica Dinculescu
				https://meowni.ca/posts/2017-puppeteer-tests/
			*/

			let img1 = fs.createReadStream(fileAfter).pipe(new PNG()).on('parsed', doneReading);
			let img2 = fs.createReadStream(fileBefore).pipe(new PNG()).on('parsed', doneReading);

			let filesRead = 0;

			function doneReading() {
				// Wait until both files are read.
				if (++filesRead < 2) return;

				// Compare image sizes
				const hasSizeMismatch = (
					img1.height !== img2.height ||
					img1.width !== img2.width
				);

				if (hasSizeMismatch) {
					console.log(`🛠  ${fileNameLog} - Screenshots of different sizes will be adjusted to the largest`);
					report.compareErrors.push(`${fileNameLog} - Screenshot sizes are different`);
				}

				// Align images in size if different
				[img1, img2] = hasSizeMismatch
					? alignImagesToSameSize(img1, img2)
					: [img1, img2];

				// Do the visual diff.
				const diff = new PNG({ width: img1.width, height: img2.height });
				const numDiffPixels = pixelmatch(
					img1.data, img2.data, diff.data, img1.width, img1.height,
					{ threshold: 0.5 },
				);

				const compatibility = 100 - numDiffPixels * 100 / (img1.width * img1.height);
				const consoleIcon = (numDiffPixels > 0) ? '❗️' : '✅';

				diff.pack().pipe(fs.createWriteStream(fileDiffs));

				// Puts test results into the object
				report.pages[`${fileNoExt}.html`] = {
					[(device === '') ? `PC${pageWidth}` : device]: {
						filePath: path.join(diffDir, device, `${fileNoExt + pageWidthPostfix}.png`),
						fileBeforePath: path.join(beforeDir, device, `${fileNoExt + pageWidthPostfix}.png`),
						fileAfterPath: path.join(afterDir, device, `${fileNoExt + pageWidthPostfix}.png`),
						diffPx: numDiffPixels,
						diffPercents: compatibility.toFixed(3),
					},
				};

				console.log(`${consoleIcon} ${fileNameLog} - Diff: ${numDiffPixels}px, Compatibility: ${compatibility.toFixed(3)}%`);

				resolve(report);
			}
		} else {
			resolve(report);
		}
	});
};


/**
 * @description Submits images for comparison, collects data into an object to report the comparison results
 * @param {array} images Paths to the images for comparison
 * @param {object} config Image comparison settings
 * @param {string} config.diffDir Directory with comparison results (image files)
 * @returns {report} Image comparison results
 */
module.exports = compareImagesArray = async (images, config) => {
	/** @type {report} */
	const fullReport = {
		pages: {},
		notFoundGolden: [],
		notFoundActual: [],
		compareErrors: [],
	};

	fs.removeSync(config.diffDir);
	fs.mkdirsSync(config.diffDir);


	for (let image of images) {
		let report = await compareImages(image, config);

		const page = Object.keys(report.pages)[0];

		if (page) {
			fullReport.pages[page] = {
				...fullReport.pages[page],
				...report.pages[page],
			}
		}

		fullReport.notFoundGolden = [...fullReport.notFoundGolden, ...report.notFoundGolden];
		fullReport.notFoundActual = [...fullReport.notFoundActual, ...report.notFoundActual];
		fullReport.compareErrors = [...fullReport.compareErrors, ...report.compareErrors];
	}

	console.log(fullReport);

	return fullReport;
}
