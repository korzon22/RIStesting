'use strict';

var AngularHomePage = require('./home.po');
var angularHomePage = new AngularHomePage();

describe('HomePage Tests', function() {

  it("Should check, if Patient's List works", function() {
    angularHomePage.goToPatientsList();
  });

  it("Should check, if Adding Patient works", function() {
    angularHomePage.goToAddPatient();
  });

  it("Should check, if Adding Order works", function() {
    angularHomePage.goToAddOrder();
  });

  it("Should check, if Order's List works", function() {
    angularHomePage.goToOrdersList();
  });

  it("Should check, if Schedule works", function() {
    angularHomePage.goToSchedule();
  });

  it("Should check, if Timetable works", function() {
    angularHomePage.goToTimetable();
  });

  it("Should check, if Description Patterns work", function() {
    angularHomePage.goToTimetable();
  });

  it("Should check, if Performing User Raport work", function() {
    angularHomePage.goToPerformingUserRaport();
  });

  it("Should check, if Requested Work Raport work", function() {
    angularHomePage.goToRequestedWorkRaport();
  });

  it("Should check, if Administration options work", function() {
    angularHomePage.goToStatusColors();
    angularHomePage.goToOrderPriorityColors();
    angularHomePage.goToGlobalModalities();
    angularHomePage.goToDictionaries();
    angularHomePage.goToPaymentProviders();
    angularHomePage.goToPermissions();
    angularHomePage.goToUsers();
    angularHomePage.goToOrganizationUnits();
    angularHomePage.goToReferringPhysiciansUnits();
    angularHomePage.goToHCUnits();
    angularHomePage.goToMaterials();
  });

  it("Should check, if 'All in One' 4 options work", function() {
    angularHomePage.allInOneButton.click();
    angularHomePage.setDarkColorsButton.click();
    angularHomePage.allInOneButton.click();
    angularHomePage.setBrightColorsButton.click();
    angularHomePage.allInOneButton.click();
    angularHomePage.changePasswordButton.click();
    angularHomePage.allInOneButton.click();
    angularHomePage.logoutButton.click();
  });

});