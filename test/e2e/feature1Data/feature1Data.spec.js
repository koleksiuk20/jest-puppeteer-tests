const { Settings } = require('../common/configUtil');
const { Feature1Data } = require('../common/feature1DataUtil');
const { StepHelpers } = require('../common/steps_support/stepHelpers');
const { Hooks } = require('../common/steps_support/hooks');

describe('I as an Agent want to', () => {

	// let page;

	// beforeAll(async () => {
	// 	page = await global.__BROWSER__.newPage();
	// 	await StepHelpers.elementsCommands.loadEnvironment(page);
	// }, Settings.timeout);

	// afterAll(() => {
	// 	browser.close(3000);
	// });

	Hooks.beforeAllHook();
  Hooks.afterAllHook();

	test('see all necessary fields in the form when the Customer owns 2 roles', async () => {

		try {
			await StepHelpers.elementsCommands.waitForSelectorAndClick(Feature1Data.element.showPdsFormIconVn, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.formVisibleVn, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.birthDateLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.emailLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.addresseLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.roleLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.customerDataLabelVn, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.customerDataLabelVp, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.customerDataLabelBeitragszahler, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.birthPlaceLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.nationalityLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.sexLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.radioBtn.maleSex, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.radioBtn.femaleSex, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.firstName, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.lastName, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.birthPlace, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.birthDate, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.nationality, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.emailAddress, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.emailAddressWork, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.phoneCountryPrefix, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.phoneAreaPrefix, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.phoneBaseNumber, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.additionalAddress, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.streetName, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.buildingNumber, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.buildingNumberAddition, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.postCode, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.city, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.additionalCity, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.country, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.radioBtn.samePolicyHolder, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.radioBtn.differentPolicyHolder, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.button.submit, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.button.cancel, page);
			await StepHelpers.elementsCommands.selectElem(Feature1Data.button.cancel, page);
		} catch(error) {
			console.log(error);
		}
	}, Settings.timeout);

	test('see errors if any of the required input fields is empty in the form when the Customer owns 2 roles', async () => {

		try {
			await StepHelpers.elementsCommands.waitForSelectorAndClick(Feature1Data.element.showPdsFormIconVn, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.formVisibleVn, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.firstName, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.lastName, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.birthPlace, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.birthDate, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.nationality, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.emailAddress, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.emailAddressWork, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.phoneCountryPrefix, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.phoneAreaPrefix, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.phoneBaseNumber, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.additionalAddress, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.streetName, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.buildingNumber, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.buildingNumberAddition, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.postCode, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.city, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.additionalCity, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.country, page);
			await StepHelpers.elementsCommands.clearInputField(Feature1Data.element.postCode, page);
			await StepHelpers.elementsCommands.selectElemAndWaitForSelector(Feature1Data.button.submit, Feature1Data.element.errorMessage, page);
			await StepHelpers.elementsCommands.selectElem(Feature1Data.button.cancel, page);
		} catch(error) {
			console.log(error);
		}
	}, Settings.timeout);

	test('see all roles assigned in the form when the Customer owns 2 roles', async () => {
		try {
			await StepHelpers.elementsCommands.waitForSelectorAndClick(Feature1Data.element.showPdsFormIconVn, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.formVisibleVn, page);
			await StepHelpers.elementsCommands.getTextContent(Feature1Data.label.customerDataLabelVn, 'POLICYHOLDER', page);
			await StepHelpers.elementsCommands.getTextContent(Feature1Data.label.customerDataLabelVp, 'INJURED PERSON', page);
			await StepHelpers.elementsCommands.getTextContent(Feature1Data.label.customerDataLabelBeitragszahler, 'CONTRIBUTION PAYER', page);
			await StepHelpers.elementsCommands.selectElem(Feature1Data.button.cancel, page);
		} catch(error) {
			console.log(error);
		}
	}, Settings.timeout);

	test('see 2 roles assigned in the form when the Customer is policyholder, but not injured person and another form with 1 role assigned - injured person', async () => {
		try {
			await StepHelpers.elementsCommands.waitForSelectorAndClick(Feature1Data.element.showPdsFormIconVn, page);
			await StepHelpers.elementsCommands.fillInInputField(Feature1Data.element.birthPlace, 'Berlin', page);
			await StepHelpers.elementsCommands.selectElem(Feature1Data.radioBtn.differentPolicyHolder, page);
			await StepHelpers.elementsCommands.selectElem(Feature1Data.button.submit, page);
			await page.waitFor(1000);
			await StepHelpers.elementsCommands.getTextContent(Feature1Data.label.customerDataLabelVn, 'POLICYHOLDER', page);
			await StepHelpers.elementsCommands.getTextContent(Feature1Data.label.customerDataLabelBeitragszahlerNotInsured, 'CONTRIBUTION PAYER', page);
			// await StepHelpers.elementsCommands.getTextContent(Feature1Data.label.insuredPersonDataLabelVp, 'INJURED PERSON', page); // TO BE DONE
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.formVisibleVp, page);
			await StepHelpers.elementsCommands.selectElem(Feature1Data.element.showPdsFormIconVp, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.formVisibleVn, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.birthDateLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.emailLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.addresseLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.roleLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.customerDataLabelVn, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.customerDataLabelBeitragszahlerNotInsured, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.insuredPersonDataLabelVp, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.birthPlaceLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.nationalityLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.label.sexLabel, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.radioBtn.maleSex, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.radioBtn.femaleSex, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.firstName, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.lastName, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.birthPlace, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.birthDate, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.nationality, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.additionalAddress, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.streetName, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.buildingNumber, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.buildingNumberAddition, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.postCode, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.city, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.additionalCity, page);
			await StepHelpers.elementsCommands.isElementVisible(Feature1Data.element.country, page);
		} catch(error) {
			console.log(error);
		}
	}, Settings.timeout);

	test('create policyholder and injured person and copy policyholder address data to Vp', async () => {
		try {
			await StepHelpers.elementsCommands.selectElem(Feature1Data.button.copyPolicyHolderAddress, page);
			await StepHelpers.elementsCommands.selectElem(Feature1Data.radioBtn.maleSex, page);
			await StepHelpers.elementsCommands.fillInInputField(Feature1Data.element.firstName, 'Jan', page);
			await StepHelpers.elementsCommands.fillInInputField(Feature1Data.element.lastName, 'Kowalski', page);
			await StepHelpers.elementsCommands.fillInInputField(Feature1Data.element.birthPlace, 'Berlin', page);
			await StepHelpers.elementsCommands.fillInInputField(Feature1Data.element.birthDate, '01.02.1970', page);
			await StepHelpers.elementsCommands.fillInInputFieldSelectElemAndSubmit(Feature1Data.element.nationality, 'Deu', Feature1Data.element.nationalityElem, Feature1Data.button.submit, page);
		} catch(error) {
			console.log(error);
		}
	}, Settings.timeout);
	
});
