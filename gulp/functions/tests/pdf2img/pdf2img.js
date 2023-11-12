const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

const pdftoimage = require('pdftoimage');
const { joinImages } = require('join-images');


/**
 * @typedef {object} pdf2imgReport Report on the results of converting PDF to image files
 * @property {string[]} createdImages Paths to the created image files
 * @property {string[]} createImageErrors Image creation errors
 */

/**
 * @description Converts PDF to PNG
 * @param {string[]} files List of files for conversion
 * @param {object} config Conversion settings
 * @param {string} config.tempDir Path to the temporary files directory
 * @param {string} config.srcDir Path to a folder with source PDF files
 * @param {number[]} config.removeOldImages Deleting old images
 * @param {string} outputFolder Conversion results folder (the results of converting PDF to PNG will be saved to this folder)
 * @returns {pdf2imgReport} Conversion results
 */
module.exports = pdf2img = async (files, config, outputFolder) => {
	const tempDir = config.tempDir;
	const srcDir = config.srcDir;
	const removeOldImages = config.removeOldImages;

	/** @type {pdf2imgReport} */
	const pdf2imgReport = {
		createdImages: [],
		createImageErrors: [],
	};

	const joinOptions = {
		offset: 10,
		color: '#000000',
	};

	fs.removeSync(tempDir);
	fs.mkdirsSync(tempDir);

	if (removeOldImages) {
		fs.removeSync(outputFolder);
	}

	fs.mkdirsSync(outputFolder);

	for (let file of files) {
		const folder = path.parse(file).dir;
		const filePath = file.split('.pdf')[0];
		const filePathFull = path.join(outputFolder, `${filePath}.png`);

		if (!!folder) {
			fs.mkdirsSync(path.join(tempDir, folder));
			fs.mkdirsSync(path.join(outputFolder, folder));
		}

		// Convert PDF to separate PNG files
		await pdftoimage(
				`${path.join(srcDir, file)}`,
				{
					format: 'png', // png, jpeg, tiff or svg, defaults to png

					/*
						prefix: `pdf2img-${fileName}`,
						prefix for each image except svg, defaults to input filename
					*/
					outdir: path.join(tempDir, folder), // path to output directory, defaults to current directory
				}
			)
			.catch(err => {
				console.error(`${filePath}: Error creating images from PDF.\n${err.message}\n`);

				pdf2imgReport.createImageErrors.push(
					`${filePath}: Error creating images from PDF.\n${err.message}`
				);
			});

		// Collect the pages of PDF file
		let filePages = glob.sync(path.join(tempDir, `${filePath}-+([0-9]).png`).replace(/\\/g, '/'));

		// If there is more than one page,
		if (filePages.length > 1) {

			await joinImages(filePages, joinOptions).then(async (img) => {
				await img.toFile(filePathFull)
					.then((info) => {
						if (info) {
							console.log(`✅ PDF2IMG: ${filePath}.png`);

							pdf2imgReport.createdImages.push(filePathFull);
						}
					})
					.catch((err) => {
						console.error(`${filePath}: Error joining images.\n${err.message}\n`);

						pdf2imgReport.createImageErrors.push(
							`${filePath}: Error joining images.\n${err.message}`
						);
					});
			});

			filePages.forEach(fileToRemove => fs.removeSync(fileToRemove));

		} else {

			try {
				fs.renameSync(
					filePages[0],
					filePathFull
				);
				console.log(`✅ PDF2IMG: ${filePath}.png`);

				pdf2imgReport.createdImages.push(filePathFull);
			} catch (err) {
				console.error(`${filePath}: Error renaming image.\n${err.message}\n`);

				pdf2imgReport.createImageErrors.push(
					`${filePath}: Error renaming image.\n${err.message}`
				);
			}

		}
	}

	fs.removeSync(tempDir);

	console.log('📄 PDF2IMG: done!');

	return pdf2imgReport;
};
