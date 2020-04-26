const { Settings } = require('../common/configUtil');
const { Feature1Data } = require('../common/feature1DataUtil');
const { Feature2Data } = require('../common/feature2DataUtil');
const { Feature3Data } = require('../common/feature3DataUtil');
const { Feature4Data } = require('../common/feature4DataUtil');
const { SubmitOffer } = require('../common/submitOfferUtil');
const { SubmitOfferConfirm } = require('../common/submitOfferConfirmUtil');
const { StepHelpers } = require('../common/steps_support/stepHelpers');

describe('I as an Agent want to', () => {

	Hooks.beforeAllHook();
  Hooks.afterAllHook();

	test('send vollangebot offer', async () => {
		try {
			await StepHelpers.elementsCommands.waitForSelectorAndClick(Feature1Data.element.showPdsFormIconVn, page);
			await StepHelpers.elementsCommands.fillInInputField(Feature1Data.element.birthPlace, 'Dortmund', page);
			await StepHelpers.elementsCommands.selectElem(Feature1Data.button.submit, page);
			await page.waitFor(1000);
			await StepHelpers.elementsCommands.fillInInputField(Feature2Data.element.input.sumInsured, '1000', page);
			await StepHelpers.elementsCommands.fillInInputField(Feature2Data.element.input.paymentSpan, '5', page);
			await StepHelpers.elementsCommands.isElementVisible(Feature3Data.element.radioBtn.basis, page);
			await page.waitFor(1000);
			await StepHelpers.elementsCommands.selectElemAndWaitForSelector(Feature3Data.element.radioBtn.basis, Feature4Data.element.radioBtn.moneyLaundering1ThirdPartyNo, page);
			await StepHelpers.elementsCommands.selectElemAndWaitForSelector(Feature4Data.element.radioBtn.moneyLaundering1ThirdPartyNo, Feature4Data.element.radioBtn.moneyLaunderingDeputyNo, page);
			await StepHelpers.elementsCommands.selectElemAndWaitForSelector(Feature4Data.element.radioBtn.moneyLaunderingDeputyNo, SubmitOffer.element.button.createOrder, page);
			await page.waitFor(30000);
			await StepHelpers.elementsCommands.selectElemAndWaitForSelector(SubmitOffer.element.button.createOrder, SubmitOfferConfirm.element.section.thanks, page);
			await page.waitFor(2000);
		} catch(error) {
			console.log(error);
		}
	}, Settings.timeout);

});
