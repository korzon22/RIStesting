'use strict';

var AngularUsers = function() {
  this.pagesSelector = element(by.css("div[class='main-footer clearfix ng-scope']")).element(by.css('.select2-choice'));
  this.pages5 = element.all(by.css("li[class='select2-results-dept-0 select2-result select2-result-selectable']")).get(0);
  this.pages10 = element(by.cssContainingText('.select2-result-label', '10'));
  this.pages20 = element(by.cssContainingText('.select2-result-label', '20'));
  this.pages30 = element(by.cssContainingText('.select2-result-label', '30'));
  this.pages50 = element(by.cssContainingText('.select2-result-label', '50'));

  this.patientsNumber = element.all(by.css("tr[ng-repeat='item in reportCtrl.items']"));

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

  this.getPatientsNumber = function() {
    return this.patientsNumber.count();
  };

  this.hideShowDetailsButton = element(by.css("a[ng-click='docCtrl.hideNotRequired()']"));

  this.addNewButton = element(by.css("button[ng-click='reportCtrl.getAddAction()']"));

  this.username = element(by.model('formData.username'));

  this.password = element(by.model('formData.password'));

  this.passwordRepeat = element(by.model('formData.passwordVerify'));

  this.name = element(by.model('formData.personalData.givenName'));

  this.surname = element(by.model('formData.personalData.familyName'));

  this.saveButton = element(by.css("a[ca-submit='docCtrl.submit']"));

  this.goBackButton = element(by.css("a[ng-click='docCtrl.returnToList()']"));

  this.searchInput = element(by.css("input[type='search']"));

};

module.exports = AngularUsers;