module.exports = {
	Feature1Data: {
		element: {
			formVisibleVn: 'div[data-section-id="customer-data"]',
			formVisibleVp: 'div[data-section-id="customer-data"]:nth-child(2)',
			showPdsFormIconVn: 'div[data-section-id="customer-data"] > div > svg.ee_svg-icon',
			showPdsFormIconVp: 'div[data-section-id="customer-data"]:nth-child(3) > div > svg.ee_svg-icon',
			firstName: 'input[data-component-id="person-form-firstname"]',
			lastName: 'input[data-component-id="person-form-lastname"]',
			birthPlace: 'input[name="birthPlace"]',
			birthDate: 'input[data-component-id="person-form-birthDate"]',
			nationality: 'input[data-component-id="person-form-nationality"]',
			nationalityElem: '.ee_autocomplete__item:nth-child(1)',
			emailAddress: 'input[data-component-id="person-form-emailAddress-privat"]',
			emailAddressWork: 'input[data-component-id="person-form-emailAddress-arbeit"]',
			phoneCountryPrefix: 'input[data-component-id="person-form-phone-countryPrefix"]',
			phoneAreaPrefix: 'input[data-component-id="person-form-phone-areaPrefix"]',
			phoneBaseNumber: 'input[data-component-id="person-form-phone-baseNumber"]',
			additionalAddress: 'input[data-component-id="person-form-addressAddition"]',
			streetName: 'input[data-component-id="person-form-streetName"]',
			buildingNumber: 'input[data-component-id="person-form-buildingNumber"]',
			buildingNumberAddition: 'input[data-component-id="person-form-buildingNumberAddition"]',
			postCode: 'input[data-component-id="person-form-postCode"]',
			city: 'input[data-component-id="person-form-city"]',
			additionalCity: 'input[data-component-id="person-form-cityAddition"]',
			country: 'input[data-component-id="person-form-country"]',
			errorMessage: 'div[data-section-id="customer-data"] > div > div > div.ee_message-box'
		},
		button: {
			submit: 'button[data-component-id="person-form-submit"]',
			cancel: 'button[data-component-id="person-form-cancel"]',
			copyPolicyHolderAddress: 'div[data-section-id="customer-data"]:nth-child(3) > div:nth-child(3) > section > p > button > span > span'
		},
		radioBtn: {
			maleSex: 'label[data-component-id="person-form-title-male"]',
			femaleSex: 'label[data-component-id="person-form-title-female"]',
			samePolicyHolder: 'label[data-component-id="same-policy-holder-yes"]',
			differentPolicyHolder: 'label[data-component-id="same-policy-holder-no"]'
		},
		label: {
			birthDateLabel: 'div[data-section-id="customer-data"] > dl > div:first-child > dt',
			birthDateValue: 'div[data-section-id="customer-data"] > dl > div:first-child > dd',
			emailLabel: 'div[data-section-id="customer-data"] > dl > div:nth-child(2) > dt',
			emailValue: 'div[data-section-id="customer-data"] > dl > div:nth-child(2) > dd',
			addresseLabel: 'div[data-section-id="customer-data"] > dl > div:nth-child(3) > dt',
			addresseValue: 'div[data-section-id="customer-data"] > dl > div:nth-child(3) > dd',
			roleLabel: 'div[data-section-id="customer-data"] > dl > div:nth-child(4) > dt',
			roleValue: 'div[data-section-id="customer-data"] > dl > div:nth-child(4) > dd',
			birthPlaceLabel: 'div[data-section-id="customer-data"] > dl > div:nth-child(5) > dt',
			birthPlaceValue: 'div[data-section-id="customer-data"] > dl > div:nth-child(5) > dd',
			nationalityLabel: 'div[data-section-id="customer-data"] > dl > div:nth-child(6) > dt',
			nationalityValue: 'div[data-section-id="customer-data"] > dl > div:nth-child(6) > dd',
			sexLabel: 'div[data-section-id="customer-data"] > dl > div:nth-child(7) > dt',
			sexValue: 'div[data-section-id="customer-data"] > dl > div:nth-child(7) > dd',
			customerDataLabelVn: 'div[data-section-id="customer-data"] > dl > div:nth-child(4) > dd > span',
			customerDataLabelVp: 'div[data-section-id="customer-data"] > dl > div:nth-child(4) > dd > span:nth-child(2)',
			customerDataLabelBeitragszahler: 'div[data-section-id="customer-data"] > dl > div:nth-child(4) > dd > span:nth-child(3)',
			customerDataLabelBeitragszahlerNotInsured: 'div[data-section-id="customer-data"] > dl > div:nth-child(4) > dd > span:nth-child(2)',
			insuredPersonDataLabelVp: 'div[data-section-id="customer-data"]:nth-child(2) > dl > div:nth-child(4) > dd > span',
			birthDateAlert: 'div[data-section-id="customer-data"] > div > section:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div > span > div'
		}
	}
}
