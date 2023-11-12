// ===============================================
// FONTS
// ===============================================


// Node modules
const gulp = require('gulp');

// Config files
const projectConfig = require('../helpers/getEnvConfig').getConfigKeys();
const projectPath = require('../config/projectPath');


module.exports = fonts = () => {
	let fontsDest;

	if (process.env.STORYBOOK) {
		fontsDest = projectPath.storybook.fonts;
	} else {
		fontsDest = projectConfig.tempFolder ? projectPath.temp.fonts : projectPath.build.fonts;
	}

	return gulp.src(projectPath.src.fonts)
		.pipe(gulp.dest(fontsDest));
};
