const moment = require("moment");
const { Properties } = require('../../config/test_properties');

module.exports = {
	StepHelpers: {
		elementsCommands: {
			// Load environment
			loadEnvironment: async function loadTestingEnvironment(page) {
				const pageWidth = Properties.puppArgs.viewportWidth;
				const pageHeight = Properties.puppArgs.viewportHeight;

				await page.setViewport({ width: pageWidth, height: pageHeight });
				await page.goto(Properties.environments.staging);
				await page.waitForNavigation({waitUntil: 'networkidle0'});
			},

			// Input fields actions
			clearInputField: async function clearOutInputField(elemSelector, page) {
				await page.click(elemSelector);
				await page.evaluate( () => document.execCommand( 'selectall', false, null ) );
				await page.keyboard.press('Backspace');
				await page.mouse.click(5, 5);
			},
			clearInputFieldAndFillIn: async function clearOutInputField(elemSelector, value, page) {
				await page.click(elemSelector);
				await page.evaluate( () => document.execCommand( 'selectall', false, null ) );
				await page.keyboard.press('Backspace');
				await page.type(elemSelector, value);
				await page.mouse.click(5, 5);
			},
			fillInInputField: async function fillInInputField(elemSelector, value, page) {
				await page.click(elemSelector);
				await page.type(elemSelector, value);
				await page.mouse.click(5, 5);
			},
			fillInInputFieldAndWait: async function fillInInputFieldAndSendDataToOE(elemSelector, value, page) {
				await page.click(elemSelector);
				await page.type(elemSelector, value);
				await page.mouse.click(5, 5);
				await page.waitForNavigation({waitUntil: 'networkidle0'});
			},
			fillInInputFieldAndWaitForSelector: async function fillInInputFieldSendDataToOEAndWaitForSelector(elemSelector1, value, elemSelector2, page) {
				await page.click(elemSelector1);
				await page.type(elemSelector1, value);
				await page.mouse.click(5, 5);
				await page.waitForSelector(elemSelector2, {
					visible: true
				});
			},
			fillInInputFieldAndClickSubmit: async function fillInInputFieldAndClickOnSubmitButton(elemSelector, value, button, page) {
				await page.click(elemSelector);
				await page.type(elemSelector, value);
				await page.click(button);
			},
			fillInInputFieldSelectElemAndWait: async function fillInInputFieldSelectElementAndSendDataToOE(elemSelector, value, listItem, page) {
				await page.click(elemSelector);
				await page.type(elemSelector, value);
				await page.waitForSelector(listItem, {
  				visible: true
				});
				await page.click(listItem);
				await page.keyboard.press('Tab');
				await page.waitForNavigation({waitUntil: 'networkidle0'});
			},
			fillInInputFieldSelectElemAndSubmit: async function fillInInputFieldSelectElementAndSubmitButton(elemSelector, value, listItem, button, page) {
				await page.click(elemSelector);
				await page.type(elemSelector, value);
				await page.waitForSelector(listItem, {
  				visible: true
				});
				await page.click(listItem);
				await page.waitFor(1000);
				await page.click(button);
			},
			skipInputAndGoToNext: async function skipInputFieldAndMoveToNextOne(page) {
				await page.keyboard.press('Tab');
				await page.waitForNavigation({waitUntil: 'networkidle0'});
			},

			// Select fields actions
			selectElem: async function selectButtonElement(elemSelector, page) {
				await page.click(elemSelector);
			},
			selectElemAndWait: async function selectElementAndSendDataToOE(elemSelector, page) {
				await page.click(elemSelector);
				await page.waitForNavigation({waitUntil: 'networkidle0'});
			},
			selectElemFromList: async function selectElementFromList(elemSelector, listItem, page) {
				await page.click(elemSelector);
				await page.select(elemSelector, listItem);
			},
			selectElemFromListAndWait: async function selectElementFromListAndSendDataToOE(elemSelector, listItem, page) {
				await page.click(elemSelector);
				await page.select(elemSelector, listItem);
				await page.keyboard.press('Tab');
				await page.waitForNavigation({waitUntil: 'networkidle0'});
			},

			// Visibility
			isElementVisible: async function waitForElementVisible(elemSelector, page) {
				await page.waitForSelector(elemSelector, {
					visible: true
				});
			},
			waitForElementNotVisible: async function waitForElementNotVisible(elemSelector, page) {
				await page.waitForSelector(elemSelector, {
  				visible: false
				});
			},
			waitForSelectorAndClick: async function waitForSelectorAndClickIt(elemSelector, page) {
				await page.waitForSelector(elemSelector, {
  				visible: true
				});
				await page.click(elemSelector);
			},
			waitForSelectorAndClickWait: async function waitForSelectorAndClickIt(elemSelector, page) {
				await page.waitForSelector(elemSelector, {
  				visible: true
				});
				await page.click(elemSelector);
				await page.waitForNavigation({waitUntil: 'networkidle0'});
			},
			isElementDisplayed: async function isElemDisplayed(elemSelector, page) {
				const elem = await page.$$(elemSelector);
				expect(elem).toBe(true);
			},

			// Get text content of the element
			getTextContent: async function getTextContent(elemSelector, expectedValue, page) {
				const text = await page.$eval(elemSelector, el => el.textContent);
				expect(text).toBe(expectedValue);
			}
		}
	}
}
