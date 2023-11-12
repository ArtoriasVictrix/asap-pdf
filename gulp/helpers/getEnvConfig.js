const env = process.env.NODE_ENV;


module.exports = getEnvConfig = {
	environment: env || 'development',
	getConfigKeys () {
		let keys;
		try {
			keys = require(`../config/build/${this.environment}`);
		} catch (e) {
			throw new Error(`No config file found for environment ${this.environment}`);
		}
		keys.environment = this.environment;
		return keys;
	}
}
