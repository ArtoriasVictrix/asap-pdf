module.exports = projectPath = {
	src: {
		html: './app/html/**/*.html',
		pug: './app/pug/pages/**/*.pug',
		pugIgnore: './app/pages/**/_include/**/*.pug',
		scss: './app/scss/style.scss',
		libs: './app/libs/**/*.*',
		js: './app/js/**/*.*',
		img: './app/img/**/*.*',
		fonts: './app/fonts/**/*',
		sourcemaps: './dist/',
		mock: './mocks/**/*.json',
		mockHtml: [
			'./dist/**/*.html',
			'!./dist/mocked/**/*.html',
		],
		pdf: './dist/**/*.html',
		pdfConfig: './app/pug/pages/**/*.js',
	},

	// Intermediate production build files
	temp: {
		html: './temp/',
		pug: './temp/',
		libs: './temp/libs/',
		js: './temp/js/',
		img: './temp/img/',
		fonts: './temp/fonts/',
		scss: './temp/css/',

		// CSS files for Base64 encoding
		cssBase64: './temp/css/style.css',

		// Base64 encoded CSS for PurgeCSS
		purgeCss: './temp/css/style.b64.css',
	},
	build: {
		html: './dist/',
		pug: './dist/',
		scss: './dist/css/',
		libs: './dist/libs/',
		js: './dist/js/',
		img: './dist/img/',
		fonts: './dist/fonts/',
		mock: './dist/mocked/',
		pdf: './dist/pdf/',
	},
	watch: {
		html: './app/html/**/*.html',
		pug: [
			'./app/pug/pages/**/*.pug',
			'./app/pug/templates/**/*.pug',
			'./app/pug/mixins/**/*.pug'
		],
		scss: './app/scss/**/*.scss',
		libs: './app/libs/**/*',
		js: './app/js/**/*',
		img: 'app/img/**/*.*',
		fonts: './app/fonts/**/*.*',
		mock: [
			'./mocks/**/*.json',
			'./dist/**/*.html',
			'!./dist/mocked/**/*.html',
		],
		pdf: [
			'./dist/**/*.*',
			'!./dist/pdf/**/*.*',
			'./app/pug/pages/**/*.js',
		],
		pdfProd: [
			'./dist/**/*.html',
			'./app/pug/pages/**/*.js',
		],
	},
	clean: [
		'./dist/',
		'./temp/'
	],
	storybook: {
		scss: './stories/assets/css/',
		fonts: './stories/assets/fonts/',
	},
	cssSourcemaps: './maps/',
	scssSourcemaps: './maps/',
	jsSourcemaps: './maps/',
	pdfSettings: './app/pug/pages/',
};
