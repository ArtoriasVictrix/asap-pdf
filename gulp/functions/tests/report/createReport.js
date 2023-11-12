const path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');

const icons = require('./templates/icons');
const generateGuid = require('../generateGuid');


/**
 * @description Creates a layout with error alerts
 * @param {string[]} alertList Error alert texts
 * @param {string} alertTitle Heading for the alert block
 * @returns {string} HTML code of the alert block
 */
const createAlertTemplate = (alertList, alertTitle) => {
	const alertId = generateGuid();

	if ((alertList ?? []).length > 0) {
		const alertMessages = alertList.reduce((accum, item, idx) => {
			const isLastMessage = idx === alertList.length - 1;
			const marginClass = isLastMessage ? ' mb-0' : '';
			accum += `<p class="fz-xs${marginClass}">${item}</p>`;
			return accum;
		}, '');

		return `
			<div class="col-4">
				<div class="accordion accordion--scrollable">
					<input id="accordion-alert${alertId}" class="accordion__checkbox" type="checkbox" checked>
					<label for="accordion-alert${alertId}" class="accordion__header">
						<span class="accordion__title">
							${alertTitle}
						</span>
						<svg width="20" height="20" class="accordion__arrow" viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round"
						>
							<polyline points="6 9 12 15 18 9"></polyline>
						</svg>
					</label>
					<div class="accordion__content">
						<div class="accordion__content-inner">
							${alertMessages}
						</div>
					</div>
				</div>
			</div>
		`;
	}

	return '';
}


/**
 * @description Creates a report on image comparison results
 * @param {object} config Test settings
 * @param {string} config.testName Test name (used in the report page title)
 * @param {string} config.logoClass Name of the CSS class for the report page logo
 * @param {string} config.reportFile Path to the report file
 * @param {string} config.reportTemplate Path to the HTML file with the report template
 * @param {object} reportData Data for generating a test result report
 * @param {object} reportData.pages Paths to tested pages
 * @param {string[]} reportData.notFoundDevices Test devices not found in Puppeteer
 * @param {string[]} reportData.notFoundGolden Paths to missing golden images
 * @param {string[]} reportData.notFoundActual Paths to missing actual images
 * @param {string[]} reportData.createImageErrors Image creation errors
 * @param {string[]} reportData.compareErrors Image comparison errors
 * @returns {Promise}
 */
module.exports = createReport = (config, reportData) => {
	return new Promise((resolve, reject) => {
		const timeMod = new Date().toLocaleTimeString('ru-ru', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});

		// Icons
		const checkIcon = icons.getCheckIcon();
		const warningIcon = icons.getWarningIcon();
		const dangerIcon = icons.getDangerIcon();
		const linkIcon = icons.getLinkIcon();

		// Logo icon, logo title and <title>
		const testName = config.testName;
		const logoClass = config.logoClass;

		const pages = reportData.pages;

		let alertsTemplate = '';
		let galleryTemplate = '';

		let reportTemplateContent;

		fs.removeSync(config.reportFile);


		// Go through the object and collect HTML to insert into the report file
		for (let page in pages) {
			const pageId = generateGuid();

			let screenshotStatuses = [];

			let diffTemplate = '';
			let noDiffTemplate = '';

			galleryTemplate += `
				<div class="mt-36">
					<h3 class="h3">${page}</h3>
				`;

			for (let device in pages[page]) {
				const diffPx = pages[page][device].diffPx;
				const diffPercents = pages[page][device].diffPercents;
				const imgSrc = path.posix.join('../', pages[page][device].filePath);
				const imgBeforeSrc = path.posix.join('../', pages[page][device].fileBeforePath);
				const imgAfterSrc = path.posix.join('../', pages[page][device].fileAfterPath);

				const currentTemplate = `
					<div class="col-3">
						<div class="card">
							<h5 class="card__title">${device}</h5>
							<div class="card__content">
								<div class="card__image-container">
									<img class="card__image" src="${imgSrc}" alt="">
								</div>
								<div class="card__text">
									${(diffPx > 0)
									? `<span class="card__status">Diffs: ${(diffPx).toLocaleString('ru')}px, similarity: ${diffPercents}%</span>
										<div class="card__links">
											<a href="${imgBeforeSrc}" title="Open golden screenshot (before)" target="_blank" class="card__link">B</a>
											|
											<a href="${imgAfterSrc}" title="Open last screenshot (after)" target="_blank" class="card__link">A</a>
											<a href="${imgSrc}" title="Open diff image" target="_blank" class="card__link-icon">${linkIcon}</a>
										</div>`
									: `<div class="card__links">
										<a href="${imgSrc}" target="_blank" class="card__link-icon">${linkIcon}</a>
									</div>`}
								</div>
							</div>
						</div>
					</div>
					`;

				if (diffPx > 0) {
					screenshotStatuses.push(true);
					diffTemplate += currentTemplate;
				} else {
					screenshotStatuses.push(false);
					noDiffTemplate += currentTemplate;
				}
			}

			/*
				If there are images of a page with and without differences, two
				accordions will be created, respectively. For this, a collection
				will be created from an array of boolean values, only keeping
				the unique values.

				For example:
				If there is an image for PC without differences and an image for
				iPhone with differences for an index.html page, two accordions
				will be generated: a collapsed panel with an image for PC and an
				expanded panel with an image for iPhone.
			*/
			screenshotStatuses = Array.from(new Set(screenshotStatuses));

			screenshotStatuses.forEach(status => {
				galleryTemplate += `
					<div class="accordion mt-20">
						<input id="accordion-${pageId}" class="accordion__checkbox" type="checkbox" ${(status === true) ? 'checked' : ''}>
						<label for="accordion-${pageId}" class="accordion__header">
							<span class="accordion__title">
								${status ? dangerIcon + 'Diffs found' : checkIcon + 'No diffs found'}
							</span>
							<svg width="20" height="20" class="accordion__arrow" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
								stroke-linecap="round" stroke-linejoin="round"
							>
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
						</label>
						<div class="accordion__content">
							<div class="accordion__content-inner p-20">
								<div class="row row--gx-16">
									${status ? diffTemplate : noDiffTemplate}
								</div>
							</div>
						</div>
					</div>
					`;
			});

			galleryTemplate += `
				</div>
			`;
		}

		alertsTemplate += createAlertTemplate(reportData.notFoundDevices, `${warningIcon} Missing devices`);
		alertsTemplate += createAlertTemplate(reportData.notFoundGolden, `${warningIcon} Golden images not found`);
		alertsTemplate += createAlertTemplate(reportData.notFoundActual, `${warningIcon} Actual images not found`);
		alertsTemplate += createAlertTemplate(reportData.createImageErrors, `${dangerIcon} Image creation errors`);
		alertsTemplate += createAlertTemplate(reportData.compareErrors, `${warningIcon} Comparison errors`);

		try {
			reportTemplateContent = fs.readFileSync(config.reportTemplate, 'utf8');

			const $ = cheerio.load(reportTemplateContent);

			$('title').html(testName);
			$('#logo').addClass(logoClass);
			$('#logoText').html(testName);
			$('#date').append(timeMod);
			$('#alerts').append(alertsTemplate);
			$('#gallery').append(galleryTemplate);

			reportTemplateContent = $.html().toString();
		} catch (err) {
			console.error(`❌ Error reading a file with a report template: ${err.message}`);
			reject(err);
			return;
		}

		try {
			fs.outputFileSync(config.reportFile, reportTemplateContent);
			console.log(`📄 Report "${testName}.html" created successfully`);
			resolve();
		} catch (err) {
			console.error(`❌ Error saving a report file: ${err.message}`);
			reject(err);
			return;
		}
	});
}
