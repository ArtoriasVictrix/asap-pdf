// Node modules
const notify = require('gulp-notify');
const beeper = require('beeper');

// Config files
const projectConfig = require('./getEnvConfig').getConfigKeys();


// Playing a sound signal and displaying a compilation error message
module.exports = function onError(err) {
	if (projectConfig.useNotify) {
		notify.onError({
			title: `gulp error in ${err.plugin}`,
			message: err.toString(),
			sound: false,
		})(err);
	} else {
		console.log(err.stack)
	}

	if (projectConfig.useBeeper) {
		beeper(1);
	}

	this.emit('end');
};
