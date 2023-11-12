<p align="center">
	<a href="https://asap-pdf.com/">
		<img src="https://asap-pdf.com/favicon/android-chrome-512x512.png" alt="ASAP PDF logo" width="110" height="110">
	</a>
</p>

<h3 align="center">ASAP PDF</h3>

<p align="center">
	The first framework for fast and easy PDF layout.
	<br>
	<a href="https://asap-pdf.com/storybook-static/index.html?path=/story/introduction-welcome--page">
		<strong>Explore ASAP PDF docs »</strong>
	</a>
</p>


## About

ASAP PDF is designed to create PDF files using HTML and CSS (Pug/SCSS).

![ASAP PDF Demo](/demo.gif)

With ASAP PDF, you can:

+ Convert HTML to PDF on the fly;
+ Get an in-browser preview that’s nearly identical to the final PDF file;
+ Inline all external assets to your HTML without using third-party services (your images and fonts are encoded with
base64, and styles are automatically inserted into the `<head>` tag);
+ Use ready-made text components;
+ Reuse your components with Pug;
+ Stop worrying about stylelint or pug-lint config, as they are already configured;
+ Perform screenshot testing of your project and get a detailed report.


## 🚀 Quick start

### Requirements:

Node v14.15.0 or higher

### Quick start guide:

<ol>
	<li>
		Download the <a href="https://github.com/ArtoriasVictrix/asap-pdf" rel="noopener">ASAP PDF </a>repository;
	</li>
	<li>
		In the project root folder, run <code>npm i</code>;
	</li>
	<li>
		To start the project:
		<ul>
			<li>
				Run <code>npm start</code> if you <strong>need</strong> to inline all external assets to HTML and
				convert the final HTML to PDF on the fly. The final PDFs will be saved in the folder <code>/dist/pdf/</code>.
				You can open these PDFs in your IDE to see the result of code changes immediately;
			</li>
			<li>
				Run <code>npm run dev</code> if you <strong>don't need</strong> to inline all external assets to HTML
				and convert the final HTML to PDF on the fly. Sourcemaps are available in this mode;
			</li>
			<li>
				The project will start at <code>http://localhost:3004/index.html</code>;
			</li>
		</ul>
	</li>
	<li>
		Make a copy of the file <code>/app/pug/pages/index.pug</code> (or <code>/app/html/html-example.html</code> if you want to use HTML) and name it whatever you need;
	</li>
	<li>
		Create a SCSS file for the new page in the folder <code>/app/scss/pages/</code> and import it in the file <code>/app/scss/_pages.scss</code>, if needed;
	</li>
	<li>
		Write markup in the file created in step 4. All the code should be written inside the block with <code>.sheet.A4-m-15mm</code> classes;
	</li>
	<li>
		Use ready-made <a href="https://asap-pdf.com/storybook-static/index.html?path=/story/utilities-main-display--page">utilities</a> and <a href="https://asap-pdf.com/storybook-static/index.html?path=/story/introduction-components--page">components</a>;
	</li>
	<li>
		The compiled project files will be saved in the <code>/dist/</code> folder.
	</li>
</ol>

<p>
	View <a href="https://asap-pdf.com/storybook-static/index.html?path=/story/introduction-welcome--page" target="_blank">documentation</a> to learn more about using ASAP PDF.
</p>

<blockquote>
    <p>
		You can choose HTML files to be converted to PDF on the fly to speed up the process:
	</p>
    <ol>
        <li>
			Make a copy of <code>gulp/config/html2pdfConfig.default.js</code> and name it <code>html2pdfConfig.js</code>. The file must be stored in the same folder as <code>html2pdfConfig.default.js</code>;
        </li>
        <li>
			In <code>html2pdfConfig.js</code>, set the <code>convertAll</code> parameter to <code>false</code> and specify the list of required pages in the <code>pageList</code> array.
        </li>
    </ol>
</blockquote>


## Npm scripts

| Command                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `npm start`             | Running the project in [production mode](https//asap-pdf.com/storybook-static/index.html?path=/story/get-started-npm-scripts--page#production) (on the fly: resources are encoded in Base64 and inserted into HTML, HTML is converted to PDF)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `npm run prod:mock-pdf` | Same as `npm start` + [data mocking](https://asap-pdf.com/storybook-static/index.html?path=/story/test-mocking--page) (string substitution into labels like  `{{example}}`)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `npm run dev`           | Running the project in [development mode](https//asap-pdf.com/storybook-static/index.html?path=/story/get-started-npm-scripts--page#development) (resources are not Base64 encoded or inlined, sourcemaps are available)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `npm run test:init`     | Creating golden images from a PDF and page golden screenshots.<br><br>The project must be run with an HTML to PDF converter (such as `npm start` or `npm run prod:mock-pdf`) in a **separate terminal or in a separate tab of the terminal**.                                                                                                                                                                                                                                                                                                                                                |
| `npm test`              | - [Screenshot testing](https://asap-pdf.com/storybook-static/index.html?path=/story/test-about--page#screenshot)<br>- [pdf2img testing](https://asap-pdf.com/storybook-static/index.html?path=/story/test-about--page#pdf2img)<br><br>The project must be run with an HTML to PDF converter (such as `npm start` or `npm run prod:mock-pdf`) in a **separate terminal or in a separate tab of the terminal**. Golden screenshots and images must be created before testing (`npm run test:init`).<br><br>- To run the `npm test` script, you need to [install the Poppler library](https://asap-pdf.com/storybook-static/index.html?path=/story/get-started-install-poppler--page);<br>- Settings for screenshot and pdf testing are stored in the `gulp/config/test/` folder. |
| `npm run test:refresh`  | - Replacing old golden screenshots with new ones<br>- Replacing old PDF golden images with new ones<br>- Cleaning up folders with actual screenshots and PDF images                                                                                                                                                                                                                                                                                                                                                                                                    |

> Check a detailed description of other scripts on the [npm scripts](https://asap-pdf.com/storybook-static/index.html?path=/story/get-started-npm-scripts--page) page.

> You can learn more about testing in ASAP PDF by going to the ["About testing"](https://asap-pdf.com/storybook-static/index.html?path=/story/test-about--page) documentation page.

## 📁 Project structure

- **app/fonts/**  
Font files

- **app/img/**  
All images used in the project

- **app/js/**  
JS files of the project

- **app/libs/**  
All libraries and plugins (js/css) used in the project

- **app/pug/pages/**  
Project pages (pug)

- **app/pug/templates/**  
Pug templates (general page structure, header, footer, etc.)

- **app/pug/mixins/**  
Pug mixins

- **app/html/**  
Project pages (html)

- **app/scss/**  
Style files

- **temp/**  
Temporary files (generated in
[production mode](https://asap-pdf.com/storybook-static/index.html?path=/story/get-started-project-settings--page))

- **gulp/config**  
Project settings files

- **mocks/**  
Mocks in json

- **tests/screenshots/**  
Screenshot directory ([screenshot testing](https://asap-pdf.com/storybook-static/index.html?path=/story/test-about--page#screenshot))

- **tests/pdf2img/**  
Directory for images extracted from PDF ([pdf2img testing](https://asap-pdf.com/storybook-static/index.html?path=/story/test-about--page#pdf2img))

- **tests/Screenshot test report.html**  
Screenshot testing report

- **tests/PDF test report.html**  
pdf2img testing report
