// Node modules
const notify = require('gulp-notify');

// Config files
const projectConfig = require('./getEnvConfig').getConfigKeys();


// Displaying a compilation error message
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

	this.emit('end');
};
