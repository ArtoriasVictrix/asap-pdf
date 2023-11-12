// ===============================================
// PROJECT LIBS
// ===============================================


// Node modules
const gulp = require('gulp');

// Config files
const projectConfig = require('../helpers/getEnvConfig').getConfigKeys();
const projectPath = require('../config/projectPath');


module.exports = libs = () => {
	return gulp.src(projectPath.src.libs)
		.pipe(gulp.dest(projectConfig.tempFolder ? projectPath.temp.libs : projectPath.build.libs));
};
