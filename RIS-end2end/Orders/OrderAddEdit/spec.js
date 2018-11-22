'use strict';

var AngularHomePage = require('../home/home.po');
var AngularOrderAddEdit = require('./orderaddedit.po');
var AngularPatientsList = require('../patientslist/patientslist.po');
var AngularPatientAE = require('../patientaddedit/patientaddedit.po');
var AngularFullWorkflow = require('../fullworkflow/fullworkflow.po');
var AngularOrganizationUnitsSet = require('../organizationunitsset/organizationunitsset.po');
var AngularOrdersList = require('../orderslist/orderslist.po');
var AngularLoginPage = require('../login/login.po');

var angularHomePage = new AngularHomePage();
var angularPatientsList = new AngularPatientsList();
var angularOrderAddEdit = new AngularOrderAddEdit();
var angularOrganizationUnitsSet = new AngularOrganizationUnitsSet();
var angularPatientAE = new AngularPatientAE();
var angularOrdersList = new AngularOrdersList();
var angularLoginPage = new AngularLoginPage();

describe('CR14 - Adding and Editing Patient Tests', function() {

  beforeEach(function() {

  });

  it('0. Should log in properly ', function() {
    angularLoginPage.setUsername('godmode');
    angularLoginPage.setPassword('test1234');
    angularLoginPage.logIn();
  });

  it('1. Should check, if required labels present after pressing hide/show button', function() {
    angularHomePage.get();
    angularHomePage.goToAddOrder();
    angularOrderAddEdit.hideShowDetailsButton.click();

    expect(angularOrderAddEdit.referringPhysicianLabel.getText()).toEqual('Lekarz zlecający');
    expect(angularOrderAddEdit.patientLabel.getText()).toEqual('Pacjent');
    expect(angularOrderAddEdit.serviceTypeLabel.getText()).toEqual('Rodzaj badania');
    expect(angularOrderAddEdit.requestedDateLabel.getText()).toEqual('Data zlecenia');
    expect(angularOrderAddEdit.orderPriorityLabel.getText()).toEqual('Priorytet zlecenia');
    expect(angularOrderAddEdit.hCUnitLabel.getText()).toEqual('Placówka');
  });

  it('2. Should check, if Adding Order works fine', function() {
    // angularHomePage.allInOneButton.click();
    // angularHomePage.setTargetOrganizationUnitsButton.click();
    // angularOrganizationUnitsSet.saveButton.click();
    // angularHomePage.goToAddOrder();
    // angularOrderAddEdit.hideShowDetailsButton.click();

    // choose 2 - Name
    angularOrderAddEdit.patientDropdown.click();
    angularOrderAddEdit.nameInput.sendKeys('   ');

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
    });

    angularOrderAddEdit.firstListElement.click();
    // choose 3 - Type
    angularOrderAddEdit.orderTypeDropdown.click();
    angularOrderAddEdit.orderTypeInput.sendKeys('   ');

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
    });

    angularOrderAddEdit.firstListElement.click();

    //choose 5 - Priority
    angularOrderAddEdit.orderPriorityDropdown.click();

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("li[class='select2-results-dept-0 select2-result select2-result-selectable']"));
    });

    angularOrderAddEdit.firstListElement.click();

    //choose 6 - Unit
    angularOrderAddEdit.unitDropdown.click();

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
    });

    //angularOrderAddEdit.unitInput.sendKeys('Cos tam');

    angularOrderAddEdit.firstListElement.click();
    angularOrderAddEdit.saveOrderButton.click();
    angularHomePage.goToOrdersList();
  });

});