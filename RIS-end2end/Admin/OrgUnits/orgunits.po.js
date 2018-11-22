'use strict';

var AngularOrgUnits = function() {
	this.mainPlusButton = element(by.cssContainingText('span.ng-binding',
		'Szpital Specjalistyczny św. Wojciecha Samodzielny Publiczny Zakład Opieki Zdrowotnej'))
		.element(by.xpath('..'))
		.element(by.css("span[class='glyphicon glyphicon-plus orgUnitsButton ng-isolate-scope']"));

	this.newUnitName = element(by.model('newUnit.title'));

	this.saveUnitButton = element(by.model('newUnit.title'))
		.element(by.xpath('../..'))
		.element(by.css("span[class='glyphicon glyphicon-ok ng-isolate-scope']"));

	//change here the unit name
	this.newUnitPlusButton = element(by.cssContainingText('span.ng-binding', 'JednostkaTestowa5'))
		.element(by.xpath('..'))
		.element(by.css("span[class='glyphicon glyphicon-plus orgUnitsButton ng-isolate-scope']"));

	this.finalCheckbox = element(by.model('newUnit.title'))
		.element(by.xpath('../..'))
		.element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

	this.unit1 = element(by.cssContainingText('span.ng-binding', 'WIELOSPECJALISTYCZNY SZPITAL ŚW.WOJCIECHA'));

	this.unit2 = element(by.cssContainingText('span.ng-binding', 'WIELOSPECJALISTYCZNE I PODSTAWOWE ZESPOŁY AMBULATORYJNE'));

	//change here the unit name
	this.newSubUnitName = element(by.cssContainingText('span.ng-binding', 'JednostkaTestowa5'))
		.element(by.xpath('../../../..'))
		.element(by.model('newUnit.title'));

	//change here the unit name
	this.newSubUnitFinalCheckbox = element(by.cssContainingText('span.ng-binding', 'JednostkaTestowa5'))
    .element(by.xpath('../../../..'))
    .element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

  //change here the unit name
  this.newSubUnitSaveButton = element(by.cssContainingText('span.ng-binding', 'JednostkaTestowa5'))
    .element(by.xpath('../../../..'))
    .element(by.css("span[class='glyphicon glyphicon-ok ng-isolate-scope']"));

  this.doctorsPortfolioButton = element(by.cssContainingText('span.ng-scope.ng-binding', 'Portfolio lekarza'));

	this.usersButton = element(by.cssContainingText('span.ng-scope.ng-binding', 'Użytkownicy'));

	this.usersSearchInput = element(by.model('reportCtrl.query'));

	this.addNewPortfolioButton = element(by.css("button[ng-click='portfoliosListCtrl.addNewPortfolio()']"));

	this.confirmDescriptionPlusButton = element.all(by.repeater('action in portfolioCtrl.portfolio.actionsTypes'))
		.get(1).element(by.css("span[tooltip='Zaznacz kolumnę']"));

	this.sendDescriptionPlusButton = element.all(by.repeater('action in portfolioCtrl.portfolio.actionsTypes'))
		.get(2).element(by.css("span[tooltip='Zaznacz kolumnę']"));

	this.portfolioNameInput = element(by.model('portfolioCtrl.portfolio.name'));

	this.saveButton = element(by.cssContainingText('span.ng-scope', 'Zapisz'));

	this.editButton = element(by.css("a[ng-click='sCtrl.editPortfolio(item)']"));

	this.uSoundEditButton = element(by.cssContainingText('span.ng-binding', 'Gabinet Ultrasonografii'))
		.element(by.xpath('..'))
		.element(by.css("span[class='glyphicon glyphicon-pencil orgUnitsButton ng-scope ng-isolate-scope']"));

	//CR8 *******************************************************************************************************************************************//

	this.zdoPlusButton = element(by.cssContainingText('span.ng-binding', 'Zakład Diagnostyki Obrazowej'))
		.element(by.xpath('..'))
		.element(by.css("span[class='glyphicon glyphicon-plus orgUnitsButton ng-isolate-scope']"));

	this.newUnitInput = element(by.css("div[class='addNewSection ng-scope']"))
		.element(by.model('newUnit.title'));

	this.checkbox = element(by.css("div[class='addNewSection ng-scope']"))
		.element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

	this.confirmButton = element(by.css("div[class='addNewSection ng-scope']"))
		.element(by.css("span[class='glyphicon glyphicon-ok ng-isolate-scope']"));

	this.complexTypesExamButton	= element(by.cssContainingText('span.ng-scope.ng-binding', 'Typy badań złożonych'));

	this.removeButton = element(by.repeater('item in reportCtrl.items'))
		.element(by.css("a[ng-click='deleteItem()']"));

		this.cancelopButton = element(by.cssContainingText('button.btn.btn-default.ng-scope', 'Anuluj'));

	this.confirmopButton = element(by.cssContainingText('button.btn.btn-default.ng-scope', 'Potwierdź'));

	this.typesExamButton = element.all(by.cssContainingText('span.ng-scope.ng-binding', 'Typy badań')).get(1);

	this.addNewTypeButton = element(by.css("button[ng-click='reportCtrl.getAddAction()']"));

	this.theFormNameInput = element(by.model('formData.name'));

	this.checkboxNr1Toggle = element.all(by.css("span[ng-class='[baseClass, currentStateClass]']")).get(0);

	this.formType = element(by.css("div[class='select2-container form-control ng-scope " +
		"ng-isolate-scope ng-pristine ng-valid ng-valid-required']"));

	this.firstListElement = element.all(by.css("div[class='select2-result-label']")).get(0);

	this.saveExamTypeButton = element(by.cssContainingText('a.ca-submit.header-btn.btn-primary.ng-isolate-scope', 'Zapisz'));

	this.examSearchInput = element(by.model('reportCtrl.query'));

	this.typesExamsStepsButton = element(by.cssContainingText('span.ng-scope.ng-binding', 'Typy kroków badań'));

	this.examEditButton = element(by.repeater('item in reportCtrl.items'))
		.element(by.css("a[ng-click='sCtrl.edit(item)']"));

	this.datePickerRow = element(by.css("div[ng-init='datePickerOpen = {}']"));

	this.incrementMinutesButton = element(by.css("a[ng-click='incrementMinutes()']"));

	this.devicesButton = element(by.cssContainingText('span.ng-scope.ng-binding', 'Urządzenia'));

	this.aeTitleInput = element(by.model('formData.aETitle'));

	this.editLRRole = element(by.cssContainingText('td.ng-binding', 'Lekarz Radiolog'))
		.element(by.xpath('..')).element(by.css("span[class='glyphicon glyphicon-pencil']"));

	this.checkbox16 = element(by.css("input[name='portfolio[1][6]']"));
	this.checkbox110 = element(by.css("input[name='portfolio[1][10]']"));

	this.checkbox26 = element(by.css("input[name='portfolio[2][6]']"));
	this.checkbox210 = element(by.css("input[name='portfolio[2][10]']"));

	this.checkbox36 = element(by.css("input[name='portfolio[3][6]']"));
	this.checkbox310 = element(by.css("input[name='portfolio[3][10]']"));

	this.checkbox15 = element(by.css("input[name='portfolio[1][5]']"));
	this.checkbox17 = element(by.css("input[name='portfolio[1][7]']"));

	this.checkbox25 = element(by.css("input[name='portfolio[2][5]']"));
	this.checkbox27 = element(by.css("input[name='portfolio[2][7]']"));

	this.checkbox35 = element(by.css("input[name='portfolio[3][5]']"));
	this.checkbox37 = element(by.css("input[name='portfolio[3][7]']"));

};

module.exports = AngularOrgUnits;