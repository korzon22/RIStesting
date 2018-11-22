'use strict';

var AngularHomePage = require('../home/home.po');
var AngularPatientsList = require('../patientslist/patientslist.po');
var AngularOrganizationUnitsSet = require('../organizationunitsset/organizationunitsset.po');
var AngularOrderAddEdit = require('../orderaddedit/orderaddedit.po');
var AngularOrdersList = require('./orderslist.po');

var angularHomePage = new AngularHomePage();
var angularOrderAddEdit = new AngularOrderAddEdit();
var angularPatientsList = new AngularPatientsList();
var angularOrganizationUnitsSet = new AngularOrganizationUnitsSet();
var angularOrdersList = new AngularOrdersList();

describe('CR13 - checking number of orders', function() {

  beforeEach(function() {
    console.log('');
    console.log('---Test starts---');
  });

  afterEach(function() {
    console.log('---Test ends-----');
  });

  angularHomePage.goToOrdersList();

  it("Should check, if 5 patients on the list", function() {
    angularOrdersList.chooseListOf5();

    browser.takeScreenshot();

    angularOrdersList.noOfOrders.evaluate('reportCtrl.items.total').then(function(value) {
      console.log('Total number of orders: ' + value);
      if (value >= 5) {
        expect(angularOrdersList.checkAmountOfOrders()).toEqual(5);
        console.log('Checked for 5');
      }
    });
  });

  it("Should check, if 10 patients on the list", function() {
    angularOrdersList.chooseListOf10();browser.takeScreenshot();
    angularOrdersList.noOfOrders.evaluate('reportCtrl.items.total').then(function(value) {
      if (value >= 10) {
        expect(angularOrdersList.checkAmountOfOrders()).toEqual(10);
        console.log('Checked for 10');
      }
    });
  });

  it("Should check, if 20 patients on the list", function() {
    angularOrdersList.chooseListOf20();browser.takeScreenshot();
    angularOrdersList.noOfOrders.evaluate('reportCtrl.items.total').then(function(value) {
      if (value >= 20) {
        expect(angularOrdersList.checkAmountOfOrders()).toEqual(20);
        console.log('Checked for 20');
      }
    });
  });

  it("Should check, if 30 patients on the list", function() {
    angularOrdersList.chooseListOf30();browser.takeScreenshot();
    angularOrdersList.noOfOrders.evaluate('reportCtrl.items.total').then(function(value) {
      if (value >= 30) {
        expect(angularOrdersList.checkAmountOfOrders()).toEqual(30);
        console.log('Checked for 30');
      }
    });
  });

  it("Should check, if 50 patients on the list", function() {
    angularOrdersList.chooseListOf50();browser.takeScreenshot();
    angularOrdersList.noOfOrders.evaluate('reportCtrl.items.total').then(function(value) {
      if (value >= 50) {
        expect(angularOrdersList.checkAmountOfOrders()).toEqual(50);
        console.log('Checked for 50');
      }
    });
  });

});