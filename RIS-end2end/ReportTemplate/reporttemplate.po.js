'use strict';

var AngularReportTemplate = function() {
	this.addButton = element(by.css("button[ng-click='reportCtrl.getAddAction()']"));

	this.editableForm = element(by.css("iframe[class='cke_wysiwyg_frame cke_reset']"));

	this.templateTypeDropdown = element.all(by.css("div[class='form-group form-group-required']")).get(0)
	.element(by.css("div[class='col-md-9']"));

  this.templateTypeInput = element(by.id('select2-drop'))
  .element(by.css("input[type='text']"));

	this.firstListElement = element.all(by.css("div[class='select2-result-label']")).get(0);

	this.templateNameField = element.all(by.css("div[class='form-group form-group-required']")).get(1)
		.element(by.css("input[type='text']"));

		this.saveButton = element(by.cssContainingText('a', 'Zapisz'));
};

module.exports = AngularReportTemplate;