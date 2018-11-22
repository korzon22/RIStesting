'use strict';

var AngularOrderAddEdit = function() {
  this.templatesButton = element(by.css("i[class='glyphicon glyphicon-list-alt']"));

  this.selectTemplateButton = element(by.css("a[translate='selectWorkReportTemplateAction']"));

  this.actionCheckbox = element(by.css("table[class='table report-table ng-scope']"))
    .element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

  this.saveChoiceButton = element(by.css("a[ng-click='docCtrl.chooseWorkReportTemplate()']"));

  this.hideShowDetailsButton = element(by.css('[ng-click="docCtrl.hideNotRequired()"]'));

  this.referringPhysicianLabel = element(by.css("span[translate='referringPhysicianLabel']"));

  this.patientLabel = element(by.css("span[translate='patientLabel']"));

  this.serviceTypeLabel = element(by.css("span[translate='serviceTypeLabel']"));

  this.requestedDateLabel = element(by.css("span[translate='requestedDateLabel']"));

  this.orderPriorityLabel = element(by.css("span[translate='orderPriorityLabel']"));

  this.hCUnitLabel = element(by.css("span[translate='hCUnitLabel']"));

  this.saveOrderButton = element(by.css("a[ca-submit='docCtrl.submit']"));

  this.patientDropdown = element.all(by.css("div[class='form-group form-group-required']"))
    .get(1).element(by.css("div[class='col-md-9']"));

  this.nameInput = element(by.css("div[class='select2-drop select2-display-none select2-with-searchbox select2-drop-active']"))
    .element(by.css("input[type='text']"));

  this.orderTypeDropdown = element.all(by.css("div[class='form-group form-group-required']"))
    .get(2).element(by.css("div[class='col-md-9']"));

  this.orderTypeInput = element(by.css("div[id='select2-drop']"))
    .element(by.css("input[type='text']"));

  this.orderPriorityDropdown = element.all(by.css("div[class='form-group form-group-required']"))
    .get(4).element(by.css("div[class='col-md-9']"));

  this.unitDropdown = element.all(by.css("div[class='form-group form-group-required']"))
  .get(5).element(by.css("div[class='select2-container form-control " +
      "ng-scope ng-isolate-scope ng-pristine ng-valid ng-valid-required']"));

  //Cos nie hula
  this.unitInput = element(by.id('select2-drop'))
    .element(by.css("input[type='text']"));

  this.firstListElement = element.all(by.css("div[class='select2-result-label']")).get(0);

  this.getListElement = function(nr) {
    return element.all(by.css("div[class='select2-result-label']")).get(nr);
  };

  this.commentButton = element(by.css("i[class='glyphicon glyphicon-comment']"));

  this.addCommentButton = element(by.model('formData.comments'))
    .element(by.css("a[class='form-collection-add-btn']"));

  this.commentTextField = element(by.model('item.content'));

  this.sendCommentButton = element(by.css("button[ca-submit='collectionCtrl.sendComment']"));

  this.addOrder = function(surname, name) {
    //Adding Order
    this.hideShowDetailsButton.click();
    this.patientDropdown.click();
    this.nameInput.sendKeys(surname + ' ' + name);

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
    });

    this.firstListElement.click();
    this.orderTypeDropdown.click();
    this.orderTypeInput.sendKeys('   ');

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
    });

    this.firstListElement.click();
    this.orderPriorityDropdown.click();
    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("li[class='select2-results-dept-0 " +
        "select2-result select2-result-selectable']"));
    });

    this.firstListElement.click();
    this.unitDropdown.click();

    this.unitInput.sendKeys('   ');
    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
    });

    this.firstListElement.click();
    this.saveOrderButton.click();
    console.log('Order added');
  };
};

module.exports = AngularOrderAddEdit;