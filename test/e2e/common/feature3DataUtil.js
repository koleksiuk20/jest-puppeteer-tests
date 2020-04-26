module.exports = {
	Feature3Data: { 
		element: {
			select: {
				paymentMethod: 'select[data-component-id="comparasion-table-payment-method"]',
				funeralPacket: 'div[data-section-id="comparison-table"] > div > div > table > tbody > tr:nth-child(7) > td:nth-child(4) > div > div > span > span',
				option: {
					einmalzahlung: 'option[value="EINMALZAHLUNG"]',
					halbjaehrlich: 'option[value="HALBJAEHRLICH"]',
					jaehrlich: 'option[value="JAEHRLICH"]',
					monatlich: 'option[value="MONATLICH"]',
					vierteljaehrlich: 'option[value="VIERTELJAEHRLICH"]',
					kein: 'option[data-component-id="offer-form-funeralPacket-kein"]',
					klassisch: 'option[data-component-id="offer-form-funeralPacket-klassisch"]',
					tradionell: 'option[data-component-id="offer-form-funeralPacket-traditionell"]',
					exklusiv: 'option[data-component-id="offer-form-funeralPacket-exklusiv"]'
				}
			},
			radioBtn: {
				basis: 'label[data-component-id="comparasion-table-tariff-select-basis"]',
				komfort: 'label[data-component-id="comparasion-table-tariff-select-komfort"]',
				premium: 'label[data-component-id="comparasion-table-tariff-select-premium"]'
			},
			checkbox: {
				dynamik: 'div[data-section-id="comparison-table"] > div > div > table > tbody > tr:nth-child(6) > th > div > div > label > span:nth-child(3)',
				flex: 'div[data-section-id="comparison-table"] > div > div > table > tbody > tr:nth-child(7) > th > div > div > label > span:nth-child(3)'
			}
		}
	}
}
