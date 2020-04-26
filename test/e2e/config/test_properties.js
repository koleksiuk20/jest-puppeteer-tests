module.exports = {
	Properties: {
		environments: {
			localhost: {
				base: 'http://localhost:8080',
			},
			develop: 'url/address/to/develop',
			staging: 'url/address/to/staging',
			branch: 'url/address/to/branch'
		},
		puppArgs: {
			browserWidth: 2880,
			browserHeight: 1800,
			viewportWidth: 1680,
			viewportHeight: 850,
			slowMo: 20,
			headless: false,
			defaultViewport: null,
			executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
		}
	}
}
