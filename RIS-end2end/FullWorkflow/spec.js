'use strict';

var AngularHomePage = require('../home/home.po');
var AngularOrderAddEdit = require('../orderaddedit/orderaddedit.po');
var AngularPatientsList = require('../patientslist/patientslist.po');
var AngularPatientAE = require('../patientaddedit/patientaddedit.po');
var AngularFullWorkflow = require('./fullworkflow.po');
var AngularOrganizationUnitsSet = require('../organizationunitsset/organizationunitsset.po');
var AngularOrdersList = require('../orderslist/orderslist.po');

var angularHomePage = new AngularHomePage();
var angularPatientsList = new AngularPatientsList();
var angularOrderAddEdit = new AngularOrderAddEdit();
var angularOrganizationUnitsSet = new AngularOrganizationUnitsSet();
var angularPatientAE = new AngularPatientAE();
var angularOrdersList = new AngularOrdersList();

describe('Full Workflow - searching, adding if required, checking Order and Logging out', function() {
  beforeEach(function() {
    console.log('');
    console.log('---Test starts---');
  });

  afterEach(function() {
    console.log('---Test ends-----');
  });

  it('1. Checking if patient exists,if not-adding new one,then adding Order ', function() {
    //Patient details
    var name = 'Joanna';
    var surname = 'Kokoszka';
    var PESEL = '83012416429'; //Proper PESEL needed
    angularHomePage.allInOneButton.click();
    angularHomePage.setTargetOrganizationUnitsButton.click();
    angularOrganizationUnitsSet.saveButton.click();
    angularHomePage.goToPatientsList();
    angularPatientsList.checkPESEL(PESEL).then(function(number) {
      if (number > 0) {
        console.log('Patient with PESEL: ' + PESEL + ' exists in the Database');
        angularPatientsList.editPatientNr(0).click();
      }
      if (number === 0) {
        console.log('Patient with PESEL: ' + PESEL + ' doesnt exist in the Database');
        angularHomePage.goToAddPatient();
        angularPatientAE.addPatient(name, surname, PESEL);
      }
    });

    //Goes to Orders List
    angularHomePage.goToOrdersList();

    angularOrdersList.checkAmountOfOrders().then(function(orders) {
      if (orders === 0) {
        console.log('No Orders for the Patient');
        angularHomePage.goToAddOrder();
        angularOrderAddEdit.addOrder(surname, name);
      }
      if (orders > 0) {
        console.log('Number of Orders for the Patient: ' + orders);
      }
    });

    angularHomePage.goToOrdersList();

    //Editing Order
    angularOrdersList.contextMenuButtonOfRowNr(0).click().then(function() {
      angularOrdersList.editActionButton.click();
    });

    //Adding commentary and Saving
    angularOrderAddEdit.commentButton.click();
    angularOrderAddEdit.addCommentButton.click();
    angularOrderAddEdit.commentTextField.sendKeys('Some random one line commentary.');
    angularOrderAddEdit.sendCommentButton.click().then(function() {
      console.log('Commentary added');
    });
    angularOrderAddEdit.saveOrderButton.click().then(function() {
      console.log('Order saved');
    });

    //Going to Orders List
    angularHomePage.goToOrdersList();

    //Order preview
    angularOrdersList.contextMenuButtonOfRowNr(0).click().then(function() {
      angularOrdersList.showActionButton.click();
    });

    angularPatientAE.theBarSurnameName.getText().then(function(text) {
      console.log('Showing Order for Patient: ' + text);
    });

    angularPatientAE.theBarPESEL.getText().then(function(text) {
      console.log(text);
    });

    angularPatientAE.theBarBirthday.getText().then(function(text) {
      console.log(text);
    });

    angularOrderAddEdit.commentButton.click();

    //checks and compares existing and expected comments
    element.all(by.repeater('item in formData.comments')).then(function(elems) {
      console.log('Number of comments: ' + elems.length + ', comments:');
      for (var i = 0; i < elems.length; i++) {
        elems[i].evaluate('item.content').then(function(value) {
          expect(value).toEqual('Some random one line commentary.');
          console.log(value);
        });
      }
    });
  });

});