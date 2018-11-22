'use strict';

var AngularHomePage = require('../home/home.po');
var AngularPatientsList = require('./patientslist.po');
var angularHomePage = new AngularHomePage();
var angularPatientsList = new AngularPatientsList();

describe('CR11 - checking number of patients on the list', function() {
  angularHomePage.get();
  angularHomePage.goToPatientsList();

  it("Should check, if 5 patients on the list", function() {
    angularPatientsList.chooseListOf5();
    expect(angularPatientsList.getPatientsNumber()).toEqual(5);
  });

  it("Should check, if 10 patients on the list", function() {
    angularPatientsList.chooseListOf10();
    expect(angularPatientsList.getPatientsNumber()).toEqual(10);
  });

  it("Should check, if 20 patients on the list", function() {
    angularPatientsList.chooseListOf20();
    expect(angularPatientsList.getPatientsNumber()).toEqual(20);
  });

  it("Should check, if 30 patients on the list", function() {
    angularPatientsList.chooseListOf30();
    expect(angularPatientsList.getPatientsNumber()).toEqual(30);
  });

  it("Should check, if 50 patients on the list", function() {
    angularPatientsList.chooseListOf50();
    expect(angularPatientsList.getPatientsNumber()).toEqual(50);
  });

});
