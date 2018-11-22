'use strict';

var AngularHomePage = require('../home/home.po');
var AngularPatientAE = require('./patientaddedit.po');
var AngularPatientsList = require('../patientslist/patientslist.po');
var angularHomePage = new AngularHomePage();
var angularPatientsList = new AngularPatientsList();
var angularPatientAE = new AngularPatientAE();

describe('CR12 - Adding and Editing Patient Tests', function() {
  beforeEach(function() {
    angularHomePage.get();
    angularHomePage.goToAddPatient();
  });

  it("1 Should check, if warnings are shown, when trying to save an empty form and if PESEL selected automatically", function() {
    angularPatientAE.hideShowDetails();
    angularPatientAE.chooseEntryReg();
    angularPatientAE.saveChanges();
    expect(angularPatientAE.getWarnings()).toEqual(5);
    expect(angularPatientAE.PESELCounter.count()).toEqual(1);

    angularPatientAE.chooseFullReg();
    angularPatientAE.saveChanges();
    expect(angularPatientAE.getWarnings()).toEqual(5);
    expect(angularPatientAE.PESELCounter.count()).toEqual(1);

    angularPatientAE.chooseUnidentifiedReg();
    angularPatientAE.saveChanges();
    expect(angularPatientAE.getWarnings()).toEqual(2);
    expect(angularPatientAE.PESELCounter.count()).toEqual(1);
  });

  it("2 Should check, if only required form elements are visible", function() {
    angularPatientAE.hideShowDetails();

    expect(angularPatientAE.personalDataLegend.getText()).toEqual('Dane osobowe');
    expect(angularPatientAE.personalIdentifiersLegend.getText()).toEqual('Identyfikatory');
    expect(angularPatientAE.otherPersonalDataLegend.getText()).toEqual('Pozostałe dane');
    expect(angularPatientAE.addressLegend.getText()).toEqual('');
    expect(angularPatientAE.contactDetailsLegend.getText()).toEqual('');
    expect(angularPatientAE.acceptedReceiverPersonalDatasLegend.getText()).toEqual('');

  });

  it("3 Should check, if the fields for Unidentified Patient are properly filled", function() {
    angularPatientAE.chooseUnidentifiedReg();
    angularPatientAE.nameField.evaluate('formData.personalData.givenName').then(function(value) {
      expect(value).toEqual('NN');
    });

    angularPatientAE.surnameField.evaluate('formData.personalData.familyName').then(function(value) {
      expect(value).toEqual(angularPatientAE.getCurrentDate());
    });

  });

  it("4 Should check, if all Personal Identifiers selected", function() {
    angularPatientAE.hideShowDetails();

    for (var i = 0; i < 4; i++) {
      angularPatientAE.addIdentifier();
    }

    expect(angularPatientAE.countIdentifiers()).toEqual(5);

    angularPatientAE.clickListElement(1);
    angularPatientAE.PESELMatkiOption.click();

    angularPatientAE.clickListElement(2);
    angularPatientAE.dowodOsobistyOption.click();

    angularPatientAE.clickListElement(3);
    angularPatientAE.dokumentTozsamosciOption.click();

    angularPatientAE.clickListElement(4);
    angularPatientAE.NPWZOption.click();

    angularPatientAE.clickListElement(1);

    expect(angularPatientAE.countAvailableOptions()).toEqual(0);

  });

  it("5 Should check, if warning about 'Changes unsaved' shows up", function() {
    angularPatientAE.nameField.sendKeys("Something");
    angularHomePage.goToAddPatient();
    expect((angularPatientAE.modal).isPresent()).toBe(true);
  });

  it("6 Should check, if recently edited patient shows up on the bar", function() {
    angularHomePage.get();
    angularHomePage.goToPatientsList();
    angularPatientsList.editPatientNr(4).click();
    angularPatientAE.nameField.clear().sendKeys('Anonimowa');
    angularPatientAE.surnameField.clear().sendKeys('Anonimka');
    angularPatientAE.PESELField.sendKeys('80022213002');
    angularPatientAE.saveChanges();

    expect(angularPatientAE.theBar.count()).toEqual(1);
    expect(angularPatientAE.theBarSurnameName.getText()).toEqual('Anonimka Anonimowa');
    expect(angularPatientAE.theBarPESEL.getText()).toEqual('PESEL: 80022213002');
    expect(angularPatientAE.theBarBirthday.getText()).toEqual('data urodzenia: 22.02.1980');
  });

  it("7 Should check, if patient's gender is proper when entering PESEL number ", function() {
    for (var i = 0; i < 10; i++) {
      angularPatientAE.PESELField.sendKeys(angularPatientAE.getPESEL(i));
      if (i > 4) {
        angularPatientAE.genderField.evaluate('formData.gender').then(function(value) {
          expect(value).toEqual(2);
        });
      }
      if (i < 5) {
        angularPatientAE.genderField.evaluate('formData.gender').then(function(value) {
          expect(value).toEqual(1);
        });
        angularPatientAE.PESELField.clear();
      }
    }
  });

});