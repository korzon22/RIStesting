'use strict';

var AngularPaymentProviders = function() {
  this.addNewButton = element(by.css("button[ng-click='reportCtrl.getAddAction()']"));

  this.hideShowDetailsButton = element(by.css("a[ng-click='docCtrl.hideNotRequired()']"));

  this.newName = element(by.model('formData.name'));

  this.newAETitle = element(by.model('formData.aETitle'));
  // this.newModType =
  this.modTypeDropdown = element.all(by.css("div[class='form-group form-group-required']"))
    .get(2).element(by.css("div[class='col-md-9']"));

  this.getListElement = function(nr) {
    return element.all(by.css("div[class='select2-result-label']")).get(nr);
  };

  this.firstListElement = element.all(by.css("div[class='select2-result-label']")).get(0);

  this.saveButton = element(by.css("a[ca-submit='docCtrl.submit']"));

  this.goBackButton = element(by.css("a[ng-click='docCtrl.returnToList()']"));

  this.searchInput = element(by.css("input[type='search']"));

  this.removeButton = element(by.css("i[class='glyphicon glyphicon-trash']"));

  this.confirmRemovalButton = element(by.css("button[ng-click='ConfirmCtrl.confirm()']"));
};

module.exports = AngularPaymentProviders;