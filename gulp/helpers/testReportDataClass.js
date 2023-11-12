// Create an object to store test results data
module.exports = class TestReportData {
	constructor() {
		this.pages = {};
		this.notFoundDevices = [];
		this.notFoundGolden = [];
		this.notFoundActual = [];
		this.createImageErrors = [];
		this.compareErrors = [];
	}
};
