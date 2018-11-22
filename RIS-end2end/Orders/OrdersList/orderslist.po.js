'use strict';

var AngularOrdersList = function() {
	this.pagesSelector = element(by.css("div[class='main-footer clearfix ng-scope']")).element(by.css('.select2-choice'));
	this.pages5 = element.all(by.css("li[class='select2-results-dept-0 select2-result select2-result-selectable']")).get(0);
	this.pages10 = element(by.cssContainingText('.select2-result-label', '10'));
	this.pages20 = element(by.cssContainingText('.select2-result-label', '20'));
	this.pages30 = element(by.cssContainingText('.select2-result-label', '30'));
	this.pages50 = element(by.cssContainingText('.select2-result-label', '50'));
	this.noOfOrders = element(by.css("div[class='main-footer clearfix ng-scope']")).element(by.css("span[ng-show='reportCtrl.items.total']"));
	this.filtersButton = element(by.css("span[translate='Filters']"));
	this.nameCheckbox = element(by.css("span[translate='patientGivenNameLabel']"))
	.element(by.xpath('../..')).element(by.css("span[ng-class='[baseClass, currentStateClass]']"));
	this.surnameCheckbox = element(by.css("span[translate='patientFamilyNameLabel']"))
		.element(by.xpath('../..'))
		.element(by.css("span[ng-class='[baseClass, currentStateClass]']"));
	this.nameInput = element(by.css("input[placeholder='Proszę podać imię pacjenta']"));
	this.surnameInput = element(by.css("input[placeholder='Proszę podać nazwisko pacjenta']"));
	this.applySettingsButton = element(by.cssContainingText('button.ng-scope', 'Zastosuj'));
	this.worklistRow = element(by.css("div[class='worklist-row']"));
	this.continue1stButton = element(by.css("div[class='worklist-row-data worklist-lvl-1 ng-scope']")).element(by.css("a[translate='continueAction']"));

	this.chooseListOf5 = function() {
		this.pagesSelector.click();
		this.pages5.click();
	};

	this.chooseListOf10 = function() {
		this.pagesSelector.click();
		this.pages10.click();
	};

	this.chooseListOf20 = function() {
		this.pagesSelector.click();
		this.pages20.click();
  };

  this.chooseListOf30 = function() {
    this.pagesSelector.click();
    this.pages30.click();
  };

  this.chooseListOf50 = function() {
    this.pagesSelector.click();
    this.pages50.click();
  };

	this.contextMenuButtonOfRowNr = function(nr) {
		return element.all(by.repeater('sr in reportCtrl.items track by sr.id'))
		.get(nr).element(by.css("a[ca-icon-context='serviceRequestActions']"));
	};

	this.editActionButton = element(by.css("div[class='kv-middle kv-key-center kv-key-fit ng-scope']"))
	.element(by.css("span[translate='editAction']"));

	this.showActionButton = element(by.css("div[class='kv-middle kv-key-center kv-key-fit ng-scope']"))
		.element(by.css("span[translate='showAction']"));

	this.checkAmountOfOrders = function() {
		return browser.findElements(by.repeater('sr in reportCtrl.items track by sr.id')).then(function(elems) {
			var length = elems.length;
			return length;
		});
	};
};

module.exports = AngularOrdersList;