module.exports = devConfig = {
	// Use 'temp' folder
	tempFolder: false, // Using the temp/ folder for the build

	// Pug
	pugPrettify: true, // Making final HTML readable

	// CSS
	cssAutoprefix: false, // Using Autoprefixer
	cssUglify: false, // Compressing CSS
	cssSourcemaps: true, // Generating CSS sourcemap
	cssConcat: false, // Compilating CSS files into one
	cssConcatFilename: 'style.css', // Name of the compiled CSS file (works only when cssConcat = true)

	// SCSS
	scssAutoprefix: true, // Using Autoprefixer
	scssUglify: false, // Compressing final CSS
	scssSourcemaps: true, // Generating sourcemap for SCSS
	scssConcat: false, // Compilating final CSS files into one
	scssConcatFilename: 'style.css', // Name for the compiled CSS file (only works when scssConcat = true)

	// JS
	jsBabel: true, // Processing JavaScript with Babel
	jsUglify: false, // Compressing JavaScript
	jsSourcemaps: true, // Generating JavaScript sourcemap

	// IMG
	minifyImg: false, // Image optimization

	// Other
	usePlumber: true, // Waiting for a bug fix after compilation (for Gulp Watch)

	// Only works when usePlumber = true:
	useNotify: true, // Notifying on a compilation error (for Pug and SCSS)
	useBeeper: true, // Sound signal on a compilation error (for Pug and SCSS)
}
