const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
const { Properties } = require('./test_properties');

module.exports = async function() {
	console.log('Setup Puppeteer');
	const browser = await puppeteer.launch({ 
  	headless: Properties.puppArgs.headless, // headless mode set to false so browser opens up with visual feedback
		slowMo: Properties.puppArgs.slowMo, // how slow actions should be
		defaultViewport: Properties.puppArgs.defaultViewport,
		args: [
			`--window-size=${Properties.puppArgs.browserWidth},${Properties.puppArgs.browserHeight}`,
			// '--start-fullscreen' // uncomment this if tests should be run in the full screen mode and comment line above
		],
		executablePath: Properties.puppArgs.executablePath
	});
	// This global is not available inside tests but only in global teardown
	global.__BROWSER_GLOBAL__ = browser;
	// Expose the connection details via file system to be used in tests
	mkdirp.sync(DIR);
	fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}
