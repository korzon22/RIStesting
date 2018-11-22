'use strict';

var AngularPatientsList = function() {

  this.pagesSelector = element(by.css("div[class='main-footer clearfix ng-scope']")).element(by.css('.select2-choice'));
  this.pages5 = element.all(by.css("li[class='select2-results-dept-0 select2-result select2-result-selectable']")).get(0);
  this.pages10 = element(by.cssContainingText('.select2-result-label', '10'));
  this.pages20 = element(by.cssContainingText('.select2-result-label', '20'));
  this.pages30 = element(by.cssContainingText('.select2-result-label', '30'));
  this.pages50 = element(by.cssContainingText('.select2-result-label', '50'));

  this.searchBox = element(by.model('reportCtrl.query'));

  this.patientsNumber = element.all(by.css("tr[ng-repeat='item in reportCtrl.items']"));

  this.checkPESEL = function(PESEL) {
    this.searchBox.sendKeys(PESEL);
    return browser.findElements(by.repeater('item in reportCtrl.items')).then(function(elems) {
      var length = elems.length;
      return length;
    });

  };

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

  this.editPatientNr = function(nr) {
    return element.all(by.css("tr[ng-repeat='item in reportCtrl.items']")).get(nr)
    .element(by.css("i[class='glyphicon glyphicon-pencil']"));
  };

};

module.exports = AngularPatientsList;