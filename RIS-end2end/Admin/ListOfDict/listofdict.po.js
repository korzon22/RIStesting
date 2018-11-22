'use strict';

var AngularListOfDict = function() {
  this.unitofMaterial = element(by.cssContainingText('span.ng-scope.ng-binding', 'Jednostka materiału'));
  this.colorSelection = element(by.cssContainingText('span.ng-scope.ng-binding', 'Kolor'));
  this.orderPriority = element(by.cssContainingText('span.ng-scope.ng-binding', 'Priorytet zlecenia'));
  this.highPriorityCheckbox = element(by.cssContainingText('span.ng-scope.ng-binding', 'Wysoki'))
    .element(by.xpath('..')).element(by.xpath('..'))
    .element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

  this.typeOfMaterial = element(by.cssContainingText('span.ng-scope.ng-binding', 'Rodzaj materiału'));

  this.accompanyingPerson = element(by.cssContainingText('span.ng-scope.ng-binding', 'Rodzaj osoby towarzyszącej'));

  this.typesOfComments = element(by.cssContainingText('span.ng-scope.ng-binding', 'Rodzaje komentarzy'));

  this.typesOfPatient = element(by.cssContainingText('span.ng-scope.ng-binding', 'Rodzaje pacjenta'));

  this.emergencyCheckbox = element(by.cssContainingText('span.ng-scope.ng-binding', 'Nagły wypadek'))
    .element(by.xpath('..')).element(by.xpath('..'))
    .element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

  this.hospitalsPatientCheckbox = element(by.cssContainingText('span.ng-scope.ng-binding', 'Pacjent szpitalny'))
    .element(by.xpath('..')).element(by.xpath('..'))
    .element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

  this.hospitalsPatient = element(by.cssContainingText('span.ng-scope.ng-binding', 'Pacjent szpitalny'))
    .element(by.xpath('..'));

  this.unknownPatient = element(by.cssContainingText('span.ng-scope.ng-binding', 'Nieznany'))
    .element(by.xpath('..'));

  this.emergency = element(by.cssContainingText('span.ng-scope.ng-binding', 'Nagły wypadek'))
    .element(by.xpath('..'));

  this.outPatient = element(by.cssContainingText('span.ng-scope.ng-binding', 'Pacjent ambulatoryjny'))
    .element(by.xpath('..'));

  this.typesOfPatientsStatus = element(by.cssContainingText('span.ng-scope.ng-binding', 'Rodzaje statusów pacjenta'));

  this.stateUnknownCheckbox = element(by.cssContainingText('span.ng-scope.ng-binding', 'Stan nieznany'))
    .element(by.xpath('..')).element(by.xpath('..'))
    .element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

  this.typesOfAttachments = element(by.cssContainingText('span.ng-scope.ng-binding', 'Rodzaje załączników'));

  this.specializations = element(by.cssContainingText('span.ng-scope.ng-binding', 'Specjalizacje'));

  this.internalTransport = element(by.cssContainingText('span.ng-scope.ng-binding', 'Transport wewnętrzny'));

  this.wheelchairCheckbox = element(by.cssContainingText('span.ng-scope.ng-binding', 'Na wózku'))
    .element(by.xpath('..')).element(by.xpath('..'))
    .element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

  this.externalTransport = element(by.cssContainingText('span.ng-scope.ng-binding', 'Transport zewnętrzny'));

  this.independentCheckbox = element(by.cssContainingText('span.ng-scope.ng-binding', 'Samodzielny'))
    .element(by.xpath('..')).element(by.xpath('..'))
    .element(by.css("span[ng-class='[baseClass, currentStateClass]']"));

  this.saveButton = element(by.css("a[ng-click='dictCtrl.saveAll(dictCtrl.dictionary)']"));

  this.goBackButton = element(by.css("a[ng-click='dictCtrl.returnToList()']"));

  this.getListElement = function(i) {
    return element.all(by.repeater('dict in dictCtrl.dictionary')).get(i);
  };

};

module.exports = AngularListOfDict;