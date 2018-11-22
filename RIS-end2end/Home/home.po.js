'use strict';

var AngularHomePage = function() {

  this.patientsButton = element(by.css("div[class='ris-nav-item']:nth-child(1)"));

  this.patientsListButton = element(by.css("span[translate='patientReport']"));

  this.addPatientButton = element(by.css("span[translate='addPatient']"));

  this.internalOrderButton = element(by.css("i[class='ng-scope ico ico-align-left-24']"));

  this.orderAddButton = element(by.css("span[translate='Add service request']"));

  this.ordersListButton = element(by.css("span[translate='serviceRequestReport']"));

  this.planningButton = element(by.css("i[class='ng-scope ico ico-calendar-24']"));

  this.scheduleButton = element(by.css("span[translate='Scheduler']"));

  this.timetableButton = element(by.css("span[translate='Work calendar']"));

  this.descriptionsButton = element(by.css("i[class='ng-scope ico ico-sheet-24']"));

  this.descriptionPatternsButton = element(by.css("span[translate='workReportTemplateReport']"));

  this.administrationButton = element(by.css("i[class='ng-scope glyphicon glyphicon-cog']"));

  this.statusColorsButton = element(by.css("span[translate='statusColors']"));

  this.orderPriorityColorsButton = element(by.css("span[translate='priorityColors']"));

  this.globalModalitiesButton = element(by.css("span[translate='Global modalities']"));

  this.dictionariesButton = element(by.css("span[translate='Dictionaries']"));

  this.paymentProvidersButton = element(by.css("span[translate='Payment providers']"));

  this.permissionsButton = element(by.css("span[translate='Permissions']"));

  this.usersButton = element(by.css("span[translate='User list']"));

  this.organizationUnitsButton = element(by.css("span[translate='OrganizationUnits']"));

  this.referringPhysiciansButton = element(by.css("span[translate='Global referring physicians']"));

  this.hCUnitsButton = element(by.css("span[translate='HCUnits']"));

  this.materialsButton = element(by.css("span[translate='Global materials']"));

  this.reportButton = element(by.css("i[class='ng-scope ico ico-stats-24']"));

  this.performingUserRaportButton = element(by.css("span[translate='performingUserRaportLabel']"));

  this.requestedWorkRaportButton = element(by.css("span[translate='requestedWorkRaportLabel']"));

  this.allInOneButton = element(by.cssContainingText('span.ng-binding.ng-scope', 'All in One'));

  this.setDarkColorsButton = element(by.cssContainingText('span.ng-scope', 'Ustaw ciemną kolorystykę'));

  this.setBrightColorsButton = element(by.cssContainingText('span.ng-scope', 'Ustaw jasną kolorystykę'));

  this.setTargetOrganizationUnitsButton = element(by.cssContainingText('span.ng-scope', 'Zmień jednostki organizacyjne'));

  this.changePasswordButton = element(by.cssContainingText('span.ng-scope', 'Zmień hasło'));

  this.logoutButton = element(by.cssContainingText('span.ng-scope', 'Wyloguj'));

  this.searchBox = element(by.css("div[class='select2-container ng-isolate-scope ng-pristine ng-valid']"));

  this.searchInput = element(by.css("div[class='select2-drop select2-display-none select2-with-searchbox select2-drop-active']"))
    .element(by.css("input[type='text']"));

  this.firstListElement = element.all(by.css("div[class='select2-result-label']")).get(0);

  this.saveButton = element(by.css("a[class='ca-submit header-btn btn-primary']"));

  this.clickChecked = function(number) {

    element.all(by.css("span[class='ris-checkbox ico ico-checkbox-checked-20']"))
    .get(number)
    .click();

  };

    this.clickUnChecked = function(number) {

    element.all(by.css("span[class='ris-checkbox ico ico-checkbox-unchecked-20']"))
    .get(number)
    .click();

  };

  this.get = function() {
    browser.get('#/home');
  };

  this.goToPatientsList = function() {
    this.patientsButton.click();
    this.patientsListButton.click();
  };

  this.goToAddPatient = function() {
    this.patientsButton.click();
    this.addPatientButton.click();
  };

  this.goToOrdersList = function() {
    this.internalOrderButton.click();
    this.ordersListButton.click();
  };

  this.goToAddOrder = function() {
    this.internalOrderButton.click();
    this.orderAddButton.click();
  };

  this.goToSchedule = function() {
    this.planningButton.click();
    this.scheduleButton.click();
  };

  this.goToTimetable = function() {
    this.planningButton.click();
    this.timetableButton.click();
  };

  this.goToDescriptionPatterns = function() {
    this.descriptionsButton.click();
    this.descriptionPatternsButton.click();
  };

  this.goToPerformingUserRaport = function() {
    this.reportButton.click();
    this.performingUserRaportButton.click();
  };

  this.goToRequestedWorkRaport = function() {
    this.reportButton.click();
    this.requestedWorkRaportButton.click();
  };

    this.goToStatusColors = function() {
    this.administrationButton.click();
    this.statusColorsButton.click();
  };

  this.goToOrderPriorityColors = function() {
    this.administrationButton.click();
    this.orderPriorityColorsButton.click();
  };

  this.goToGlobalModalities = function() {
    this.administrationButton.click();
    this.globalModalitiesButton.click();
  };

  this.goToDictionaries = function() {
    this.administrationButton.click();
    this.dictionariesButton.click();
  };

  this.goToPaymentProviders = function() {
    this.administrationButton.click();
    this.paymentProvidersButton.click();
  };

  this.goToPermissions = function() {
    this.administrationButton.click();
    this.permissionsButton.click();
  };

  this.goToUsers = function() {
    this.administrationButton.click();
    this.usersButton.click();
  };

  this.goToOrganizationUnits = function() {
    this.administrationButton.click();
    this.usersButton.click();
  };

  this.goToReferringPhysiciansUnits = function() {
    this.administrationButton.click();
    this.referringPhysiciansButton.click();
  };

  this.goToHCUnits = function() {
    this.administrationButton.click();
    this.referringPhysiciansButton.click();
  };

  this.goToMaterials = function() {
    this.administrationButton.click();
    this.materialsButton.click();
  };

};

module.exports = AngularHomePage;