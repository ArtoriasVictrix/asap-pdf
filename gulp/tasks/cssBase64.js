// ===============================================
// ENCODE RESOURCES WITH BASE64
// ===============================================


// Node modules
const gulp = require('gulp');
const rename = require('gulp-rename');
const fs = require('fs');
const path = require('path');
const through2 = require('through2').default; // ESM-first package: under CJS the function is available via .default

// Config files
const projectPath = require('../config/projectPath');


// Supported MIME types for embedding
const MIME_TYPES = {
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.bmp': 'image/bmp',
	'.ico': 'image/x-icon',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.ttf': 'font/ttf',
	'.otf': 'font/otf',
	'.eot': 'application/vnd.ms-fontobject',
};


/*
	Inline replacement for gulp-css-base64 (the package is abandoned and pulls
	the vulnerable request dependency): finds local resources in url(...) and
	embeds them into CSS as data:URIs (up to maxWeightResource size)
*/
const cssBase64Transform = (maxWeightResource) => through2.obj(function (file, enc, done) {
	const cssDir = path.dirname(file.path);
	let css = file.contents.toString('utf8');

	// url('...'), url("...") and url(...) with unquoted strings
	// (data:URIs, http(s) links, anchors and empty values are skipped)
	css = css.replace(/url\((['"]?)([^'")]+)\1\)/g, (match, quote, resourceUrl) => {
		if (/^(data:|https?:|\/\/|#)/i.test(resourceUrl)) {
			return match;
		}

		// Strip the query string and hash (img.png?v=1#frag)
		const cleanUrl = resourceUrl.split(/[?#]/)[0];
		const resourcePath = path.resolve(cssDir, cleanUrl);
		const mimeType = MIME_TYPES[path.extname(resourcePath).toLowerCase()];

		if (!mimeType || !fs.existsSync(resourcePath)) {
			console.warn(`css-base64: ${resourceUrl} — not found or unsupported, skipped.`);
			return match;
		}

		if (fs.statSync(resourcePath).size > maxWeightResource) {
			return match;
		}

		const base64 = fs.readFileSync(resourcePath).toString('base64');

		return `url('data:${mimeType};base64,${base64}')`;
	});

	file.contents = Buffer.from(css, 'utf8');
	done(null, file);
});


/*
	This task converts all data found within a CSS into base64-encoded
	data URI strings
*/
module.exports = cssBase64 = () => {
	return gulp.src(projectPath.temp.cssBase64)
		.pipe(cssBase64Transform({
			maxWeightResource: 3145728, // 3MB
		}))
		.pipe(rename(path => path.basename += '.b64'))
		.pipe(gulp.dest(projectPath.temp.scss));
};
