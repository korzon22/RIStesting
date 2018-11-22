'use strict';

var AngularPatientAE = function() {

  this.hideShowDetailsButton = element(by.css("a[class='header-btn btn-link ng-scope ng-isolate-scope']"));

  this.dropdownButton = element(by.css("a[class='dropdown-toggle header-btn btn-primary']"));

  this.entryRegButton = element(by.css("li[ng-repeat='action in docCtrl.actions']:nth-child(1)"));

  this.unidentifiedRegButton = element(by.css("li[ng-repeat='action in docCtrl.actions']:nth-child(2)"));

  this.fullRegButton = element(by.css("li[ng-repeat='action in docCtrl.actions']:nth-child(3)"));

  this.saveChangesButton = element(by.css("a[class='ca-submit header-btn btn-primary ng-isolate-scope']"));

  this.addIdentifierButton = element(by.model('formData.personalData.personalIdentifiers'))
    .element(by.css('a.form-collection-add-btn'));

  this.identifiersFields = element.all(by.css("div[ng-repeat='item in formData.personalData.personalIdentifiers']"));

  this.PESELMatkiOption = element(by.cssContainingText('.select2-result-label', 'PESEL matki'));

  this.dowodOsobistyOption = element(by.cssContainingText('.select2-result-label', 'Dowód osobisty'));

  this.dokumentTozsamosciOption = element(by.cssContainingText('.select2-result-label', 'Dokument tożsamości'));

  this.NPWZOption = element(by.cssContainingText('.select2-result-label', 'NPWZ'));

  this.personalDataLegend = element(by.css("legend[translate='personalDataLegend']"));

  this.personalIdentifiersLegend = element(by.css("legend[translate='personalIdentifiersLegend']"));

  this.otherPersonalDataLegend = element(by.css("legend[translate='otherPersonalDataLegend']"));

  this.addressLegend = element(by.css("legend[translate='addressLegend']"));

  this.contactDetailsLegend = element(by.css("legend[translate='contactDetailsLegend']"));

  this.acceptedReceiverPersonalDatasLegend = element(by.css("legend[translate='acceptedReceiverPersonalDatasLegend']"));

  this.nameField = element(by.model("formData.personalData.givenName"));

  this.surnameField = element(by.model("formData.personalData.familyName"));

  this.PESELField = element(by.model("item.value"));

  this.genderField = element(by.model("formData.gender"));

  this.PESELCounter = element.all(by.cssContainingText('.select2-chosen', 'PESEL'));

  this.warnings = element.all(by.cssContainingText('.help-block', 'Pole jest wymagane'));

  this.modal = element(by.css('.modal-dialog'));

  this.theBar = element.all(by.css("div[class='ris-main-context ng-scope']"));

  this.theBarSurnameName = element(by.css("div[class='ris-main-context ng-scope']"))
  .element(by.css("div[class='context-cell ris-context-name ng-binding ng-isolate-scope']"));

  this.theBarPESEL = element(by.css("div[class='ris-main-context ng-scope']"))
  .element(by.css("span[ng-if='risMainContext.mainData.personalData.mainPersonalIdentifier']"));

  this.theBarBirthday = element(by.css("div[class='ris-main-context ng-scope']"))
  .element(by.css("span[ng-if='risMainContext.mainData.birthDate']"));

  this.theBarSquare = element(by.css("div[class='ris-main-context ng-scope']"))
  .element(by.css("a[ris-pop='actionMenu bottomLeft']"));

  this.theBarSquareNewOrder = element(by.css("div[class='kv-middle kv-key-fit kv-key-center ng-scope']"))
  .element(by.cssContainingText('span.val', 'Nowe zlecenie'));

  this.addPatient = function(name, surname, PESEL) {
    //Adding Patient
    this.nameField.sendKeys(name);
    this.surnameField.sendKeys(surname);
    this.PESELField.sendKeys(PESEL);
    this.saveChanges();
    console.log('Patient added');
  };

  this.clickListElement = function(e) {
    this.identifiersFields.get(e)
    .element(by.css("div[class='select2-container form-control ng-scope" +
      " ng-isolate-scope ng-pristine input-required ng-invalid ng-invalid-required']")).click();
  };

  this.getPESEL = function(i) {
    var pesel9c = '800222130';
    var plec = ['02','26','40','64','88','19','33','57','71','95'];
    return (pesel9c + plec[i]);
  };

  this.hideShowDetails = function() {
    this.hideShowDetailsButton.click();
  };

  this.addIdentifier = function() {
    this.addIdentifierButton.click();
  };

  this.countIdentifiers = function() {
    return this.identifiersFields.count();
  };

  this.countAvailableOptions = function() {
    return element.all(by.css('.select2-result-label')).count();
  };

  this.getWarnings = function() {
    return this.warnings.count();
  };

  this.chooseEntryReg = function() {
    this.dropdownButton.click();
    this.entryRegButton.click();
  };

  this.chooseUnidentifiedReg = function() {
    this.dropdownButton.click();
    this.unidentifiedRegButton.click();
  };

  this.chooseFullReg = function() {
    this.dropdownButton.click();
    this.fullRegButton.click();
  };

  this.saveChanges = function() {
    this.saveChangesButton.click();
  };

  this.getCurrentDate = function() {
    function addZero(i) {
      if (i < 10) {
        i = '0' + i;
      }

    return i;
    }

    var date = new Date();
    var h = addZero(date.getHours());
    var min = addZero(date.getMinutes());
    var d =  addZero(date.getDate());
    var m = addZero((date.getMonth()) + 1);
    var y = date.getFullYear();

    var s = (d + '.' + m + '.' + y + ' ' + h + ':' + min);

    return (s);
  };

};

module.exports = AngularPatientAE;