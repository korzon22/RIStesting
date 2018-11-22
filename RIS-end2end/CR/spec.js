'use strict';

var AngularHomePage = require('../home/home.po');
var AngularOrderAddEdit = require('../orders/orderaddedit/orderaddedit.po');
var AngularPatientsList = require('../patients/patientslist/patientslist.po');
var AngularPatientAE = require('../patients/patientaddedit/patientaddedit.po');
var AngularFullWorkflow = require('../fullworkflow/fullworkflow.po');
var AngularOrganizationUnitsSet = require('../admin/organizationunitsset/organizationunitsset.po');
var AngularOrdersList = require('../orders/orderslist/orderslist.po');
var AngularLoginPage = require('../login/login.po');
var AngularReportTemplate = require('../reporttemplate/reporttemplate.po');
var AngularOrganizationUnits = require('../admin/organizationunits/organizationunits.po');
var AngularListOfDict = require('../admin/listofdict/listofdict.po');
var AngularGlobalModalities = require('../admin/globalmodalities/globalmodalities.po');
var AngularPaymentProviders = require('../admin/paymentproviders/paymentproviders.po');
var AngularPermissions = require('../admin/permissions/permissions.po');
var AngularUsers = require('../admin/users/users.po');
var AngularReferringPhysicians = require('../admin/referringphysicians/referringphysicians.po');
var AngularHCUnits = require('../admin/hcunits/hcunits.po');
var AngularMaterials = require('../admin/materials/materials.po');
var AngularOrgUnits = require('../admin/orgunits/orgunits.po');
var AngularReport = require('../report/report.po');
var AngularSchedule = require('../planning/schedule/schedule.po');

var angularHomePage = new AngularHomePage();
var angularPatientsList = new AngularPatientsList();
var angularOrderAddEdit = new AngularOrderAddEdit();
var angularOrganizationUnitsSet = new AngularOrganizationUnitsSet();
var angularPatientAE = new AngularPatientAE();
var angularOrdersList = new AngularOrdersList();
var angularLoginPage = new AngularLoginPage();
var angularOrganizationUnits = new AngularOrganizationUnits();
var angularListOfDict = new AngularListOfDict();
var angularReportTemplate = new AngularReportTemplate();
var angularGlobalModalities = new AngularGlobalModalities();
var angularPaymentProviders = new AngularPaymentProviders();
var angularPermissions = new AngularPermissions();
var angularUsers = new AngularUsers();
var angularReferringPhysicians = new AngularReferringPhysicians();
var angularHCUnits = new AngularHCUnits();
var angularMaterials = new AngularMaterials();
var angularOrgUnits = new AngularOrgUnits();
var angularReport = new AngularReport();
var angularSchedule = new AngularSchedule();

describe('TEST CR1', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Add Patient ', function() {

        angularHomePage.patientsButton.click();
        angularHomePage.addPatientButton.click();

        });

    it('3. Should hide fields, which are not required ', function() {

        angularPatientAE.hideShowDetailsButton.click();

        });

    it('4. Should fill the form properly ', function() {

        angularPatientAE.nameField.sendKeys('Anonim 0');
        angularPatientAE.surnameField.sendKeys('Anonimowy ');
        angularPatientAE.PESELField.sendKeys('80072213076');

        });

    it('5. Should save the changes ', function() {

        angularPatientAE.saveChangesButton.click();

        });

    it('6. Patient Bar should show up, clicking Action Button ', function() {

        angularPatientAE.theBarSquare.click();

        });

    it('7. Should add an Order ', function() {

        angularPatientAE.theBarSquareNewOrder.click();

        });

    it('8. Should hide fields, which are not required ', function() {

        angularOrderAddEdit.hideShowDetailsButton.click();

        });

    it('9. Should fill in the Add Order form and save it properly ', function() {

        //choose 3 - Type
        angularOrderAddEdit.orderTypeDropdown.click();
            angularOrderAddEdit.orderTypeInput.sendKeys('Angio TK tętnic kończyn dolnych');

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

        angularOrderAddEdit.unitInput.sendKeys('Szpital Specjalistyczny św. Wojciecha Samodzielny Publiczny Zakład Opieki Zdrowotnej');

                browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
            });

        angularOrderAddEdit.firstListElement.click();

        angularOrderAddEdit.saveOrderButton.click();

        });

    it('10. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('11. Test ends', function() {

        });

    });

describe('TEST CR2', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Searching for person by PESEL - one result', function() {

        angularHomePage.searchBox.click();
        angularHomePage.searchInput.sendKeys('213095');

        browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
            });

        expect(element(by.id('select2-drop'))
            .element(by.cssContainingText('span', 'PESEL: 80022213095'))
            .isPresent()).toBe(true);

        });

    it('3. Search for second item - one result', function() {

        angularHomePage.searchInput.clear();
        angularHomePage.searchInput.sendKeys('stow');

        browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
            });

        expect(element(by.id('select2-drop'))
            .element(by.cssContainingText('span', 'Rostowski Jan'))
            .isPresent()).toBe(true);

        angularHomePage.searchInput.sendKeys(protractor.Key.ESCAPE);

        });

    it('4. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

  });

describe('TEST CR3', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Work Report Templates', function() {

        angularHomePage.descriptionsButton.click();
        angularHomePage.descriptionPatternsButton.click();

        });

    it('3. Should add new template ', function() {

        angularReportTemplate.addButton.click();

        });

    it('4. Should edit and add the template ', function() {

        angularReportTemplate.editableForm.sendKeys('Treść wzorca');
        angularReportTemplate.templateTypeDropdown.click();
        angularReportTemplate.templateTypeInput.sendKeys('Angio TK aorty piersiowej');

        browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
            });

        angularReportTemplate.firstListElement.click();

        angularReportTemplate.templateNameField.sendKeys('Test');

        angularReportTemplate.saveButton.click();

        });

    it('5. Should go to Orders List, find Order for Tomasz Nowak', function() {

        angularHomePage.goToOrdersList();
        angularOrdersList.filtersButton.click();
        angularOrdersList.nameCheckbox.click();
        angularOrdersList.surnameCheckbox.click();
        angularOrdersList.nameInput.sendKeys('Tomasz');
        angularOrdersList.surnameInput.sendKeys('Nowak');
        angularOrdersList.applySettingsButton.click();

        });

    it('6. Should click on Tomasz Nowak order ', function() {

        angularOrdersList.worklistRow.click();

        });

    it('7. Should proceed with the order', function() {

        angularOrdersList.continue1stButton.click();

        });

    //the Order should be a new one, otherwise test will fail
    it('8. Should go to template options', function() {

        angularOrderAddEdit.templatesButton.click();
        angularOrderAddEdit.selectTemplateButton.click();

        });

    //the Order should be a new one, otherwise test will fail
    it('9. Should choose the proper template, save the choice', function() {

        angularOrderAddEdit.actionCheckbox.click();
        angularOrderAddEdit.saveChoiceButton.click();

        });

    it('10. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

    });

//problem with this test of FireFox -doctor's portfolio is not showing up
describe('TEST CR4', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Organization Units ', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.organizationUnitsButton.click();

        });

    it('3. Should edit the US Room ', function() {

        angularOrganizationUnits.uSoundEditButton.click();

        });

    it('4. Should go to doctors portfolio', function() {

        angularOrganizationUnits.doctorsPortfolioButton.click();

        });

    it('5. Should add new portfolio', function() {

        angularOrganizationUnits.addNewPortfolioButton.click();

        });

    it('6. Should choose proper 2 options', function() {

        angularOrganizationUnits.confirmDescriptionPlusButton.click();
        angularOrganizationUnits.sendDescriptionPlusButton.click();

        });

    it('7. Should enter portolios name and save it', function() {

        angularOrganizationUnits.portfolioNameInput.sendKeys('Cos tam');
        angularOrganizationUnits.saveButton.click();

        });

    it('8. Should go to Users tab', function() {

        angularOrganizationUnits.usersButton.click();

        });

    it('9. Should look up for the required doctor - Michał Cieślik', function() {

        angularOrganizationUnits.usersSearchInput.sendKeys('Michał');

        browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("a[ng-click='sCtrl.editPortfolio(item)']"));
            });

        });

    it('10. Should choose edit doctor', function() {

        angularOrganizationUnits.editButton.click();

        });

    it('11. Should remove existing portfolio, choose the recently added and save it', function() {

        });

    it('12. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

    });

describe('TEST CR5 - should create and display Report', function() {

  it('1. Should log in properly ', function() {

    angularLoginPage.setUsername('godmode');
    angularLoginPage.setPassword('test1234');
    angularLoginPage.logIn();

  });

  it('2. Should go to Planning - Schedule', function() {

    angularHomePage.planningButton.click();
    angularHomePage.scheduleButton.click();

  });

  it('3. Should click "Week"', function() {

    var iframe = element(by.css("iframe[ng-src='http://10.132.182.149/risweb_php/public/ris/schedule/interval']"));
    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("iframe[ng-src='http://10.132.182.149/risweb_php/public/ris/schedule/interval']"));  //
    }, 20000);
    browser.switchTo().frame(iframe.getWebElement());
    browser.sleep(20000);

    browser.driver.findElement(By.xpath('//*[@id="content"]/div[2]/div[1]/div/button[2]')).click();

    browser.sleep(10000);

  });

  it('4. Should choose "RTG 1"', function() {

    browser.driver.findElement(By.id('wc-button-rooms')).click();
    browser.driver.findElement(By.xpath('//*[@id="dayViewRoomSelectContainer"]/ul/li[8]/a')).click();

    browser.sleep(10000);

  });

  it('5. Should choose date: 08.02.2016', function() {

    browser.driver.findElement(By.className('mainInput')).click();

    browser.sleep(10000);

    //changes from April 2015 to February 2016
    for (var i = 0; i < 10; i++) {
      browser.driver.findElement(By.css("span[class='ui-icon ui-icon-circle-triangle-e']")).click();
    }

    // browser.sleep(10000);

    browser.driver.findElement(By.linkText("8")).click();

    browser.sleep(10000);

  });

  it('6. Should choose time interval for Monday 08.02.2016 - 8:00 - 13:00', function() {

    browser.sleep(10000);

    browser.driver.findElements(By.className('fc-agenda-slots')).then(function() {

      browser.driver.actions()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 1850, y: 700})
      .click()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 100, y: 120})
      .mouseDown()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 100, y: 580})
      .mouseUp()
      .perform();

    });

  });

  it('7. Should check the selected date and time, select the type and color "Ciemnoniebieski", save the form', function() {

    browser.sleep(10000);

    browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).getAttribute('value')).toEqual('2016-02-08');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).getAttribute('value')).toEqual('08:00');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).getAttribute('value')).toEqual('13:00');
    });

    browser.driver.findElement(By.linkText('Proszę podać kolor')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[13]/ul/li[3]/div/span')).click();//html/body/div[13]/ul/li[3]/div/span
    });

    browser.driver.findElement(By.linkText('Proszę podać typ grafiku')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[14]/ul/li[1]/div')).click();// /html/body/div[14]/ul/li[1]/div

    });

    browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).then(function(rows) {
      browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).click();
    });

  });

  it('8. Should choose time interval for Tuesday 09.02.2016 - 8:30 - 9:30', function() {

    browser.sleep(10000);

    browser.driver.findElements(By.className('fc-agenda-slots')).then(function() {

      browser.driver.actions()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 400, y: 60})
      .mouseDown()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 400, y: 135})
      .mouseUp()
      .perform();

    });

  });

  it('9. Should check the selected date and time, select the type and color "Szkarłatny", save the form', function() {

    browser.sleep(10000);

    browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).getAttribute('value')).toEqual('2016-02-09');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).getAttribute('value')).toEqual('08:30');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).getAttribute('value')).toEqual('09:30');
    });

    browser.driver.findElement(By.linkText('Proszę podać kolor')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[14]/ul/li[6]/div/span')).click(); // /html/body/div[14]/ul/li[6]/div/span
    });

    browser.driver.findElement(By.linkText('Proszę podać typ grafiku')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[15]/ul/li[1]/div')).click(); ///html/body/div[15]/ul/li[1]/div

    });

    browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).then(function(rows) {
      browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).click(); ///html/body/div[12]/div[3]/input[2]
    });

  });

  it('10. Should choose time interval for Tuesday 09.02.2016 - 10:00 - 13:30', function() {

    browser.sleep(10000);

    browser.driver.findElements(By.className('fc-agenda-slots')).then(function() {

      browser.driver.actions()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 400, y: 150})
      .mouseDown()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 400, y: 520})
      .mouseUp()
      .perform();

    });

  });

  it('11. Should check the selected date and time, select the type and color "Ciemnozielony", save the form', function() {

    browser.sleep(10000);

    browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).getAttribute('value')).toEqual('2016-02-09');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).getAttribute('value')).toEqual('09:30');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).getAttribute('value')).toEqual('13:30');
    });

    browser.driver.findElement(By.linkText('Proszę podać kolor')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[15]/ul/li[4]/div/span')).click(); ///html/body/div[15]/ul/li[4]/div/span
    });

    browser.driver.findElement(By.linkText('Proszę podać typ grafiku')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[16]/ul/li[1]/div')).click(); // /html/body/div[16]/ul/li[1]/div

    });

    browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).then(function(rows) {
      browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).click();
    });

  });

  it('12. Should choose time interval for Wednesda 10.02.2016 - 08:50 - 11:20', function() {

    browser.sleep(10000);

    browser.driver.findElements(By.className('fc-agenda-slots')).then(function() {

      browser.driver.actions()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 700, y: 90})
      .mouseDown()
      .mouseMove(browser.driver.findElement(By.className('fc-slot-scroller')), {x: 700, y: 315})
      .mouseUp()
      .perform();

    });

  });

  it('13. Should check the selected date and time, select the type and color "Limonkowy", save the form', function() {

    browser.sleep(10000);

    browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).getAttribute('value')).toEqual('2016-02-10');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).getAttribute('value')).toEqual('08:50');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).getAttribute('value')).toEqual('11:20');
    });

    browser.driver.findElement(By.linkText('Proszę podać kolor')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[16]/ul/li[5]/div/span')).click();      // /html/body/div[16]/ul/li[5]/div/span
    });

    browser.driver.findElement(By.linkText('Proszę podać typ grafiku')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[17]/ul/li[1]/div')).click();           // /html/body/div[17]/ul/li[1]/div
    });

    browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).then(function(rows) {
      browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).click();
    });

  });

  it('14. Should select all the reservations', function() {

    browser.sleep(10000);

    browser.driver.findElement(By.css("button[class='btn wc-button select-all-btn']")).click();

  });

  it('15. Should use Copy Selection', function() {

    browser.sleep(10000);

    browser.driver.findElement(By.css("button[class='btn wc-button copy-btn']")).click();

  });

  it('16. Should go to next week', function() {

    browser.sleep(10000);

    browser.driver.findElement(By.css("button[class='btn wc-button wc-button-next']")).click();

  });

  it('17. Should use Paste', function() {

    browser.sleep(10000);

    browser.driver.findElement(By.css("button[class='btn wc-button paste-btn']")).click();

  });

  it('18. Should log out', function() {

    browser.switchTo().defaultContent();
    browser.waitForAngular();

    angularHomePage.allInOneButton.click();
    angularHomePage.logoutButton.click();

  });

  it('', function() {

  });

});

describe('TEST CR7', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - List of Dictionaries ', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.dictionariesButton.click();

        });

    it('3. Should click Types of Patient ', function() {

        angularListOfDict.typesOfPatient.click();

        });

    it('4. Should drag and drop to change the order', function() {

        browser.actions()
                .mouseDown(angularListOfDict.emergency)
                .mouseMove(angularListOfDict.getListElement(1), {x: 0, y: 10})
                .mouseUp()
                .perform();

        browser.sleep(5000);

        browser.actions()
                .mouseDown(angularListOfDict.hospitalsPatient)
                .mouseMove(angularListOfDict.getListElement(0), {x: 0, y: 10})
                .mouseUp()
                .perform();

        browser.sleep(5000);

        });

    it('5. Should choose the default option and save the changes', function() {

        angularListOfDict.emergencyCheckbox.click();
        browser.sleep(1000);
        angularListOfDict.saveButton.click();

        });

    it('6. Should add the order and check the default option', function() {

        angularHomePage.goToAddOrder();
        browser.sleep(1000);

        browser.refresh();
        //element(by.cssContainingText('span.ng-scope','Rodzaj pacjenta')).sendKeys(protractor.Key.CONTROL, "r");

        expect(element(by.cssContainingText('span.ng-scope', 'Rodzaj pacjenta'))
                            .element(by.xpath('..'))
                            .element(by.xpath('..'))
                            .element(by.css("span[class='select2-chosen']")).getText()).toEqual('Nagły wypadek');

        });

    it('', function() {

        });

    });

// //problem when using Firefox
describe('TEST CR8', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Organization Units ', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.organizationUnitsButton.click();

        });

    it('3. Should click plus next to Zaklad Diagnostyki Obrazowej ', function() {

        angularOrganizationUnits.zdoPlusButton.click();

        });

    it('4. Should input the new name and save it', function() {

        angularOrganizationUnits.newUnitInput.sendKeys('Testujemy 2');
        angularOrganizationUnits.checkbox.click();
        angularOrganizationUnits.confirmButton.click();

        });

    it('5. Should edit the US Unit', function() {

        angularOrganizationUnits.uSoundEditButton.click();

        });

    it('6. Should go to Users tab', function() {

        angularOrganizationUnits.usersButton.click();

        });

    it('7. Should search for the user', function() {

        angularOrganizationUnits.usersSearchInput.sendKeys('Daniel Sobczyk');

        });

    it('8. Should click the Bin button', function() {

        });

    it('9. Should confirm operation by clicking Delete Button', function() {

        });

    it('10. Should go to Types of Complex Examinations', function() {

         angularOrganizationUnits.complexTypesExamButton.click();

        });

    it('11. Should search for type of examination for removal', function() {

        angularOrganizationUnits.usersSearchInput.sendKeys('usg doppler nerki przeszczepionej');
        browser.waitForAngular();

        });

    it('12. Should click to remove the type of examination', function() {

            // browser.driver.wait(function() {
            //     return browser.driver.isElementPresent(by.css("a[ng-click='deleteItem()']"));
            // });

        angularOrganizationUnits.removeButton.click();

        });

    //problem with timing
    it('13. Should confirm the action', function() {

            // browser.driver.wait(function() {
            //     return browser.driver.isElementPresent(by.css("button[ng-click='ConfirmCtrl.cancel()']"));
            // });

        angularOrganizationUnits.cancelopButton.click();
        // angularOrganizationUnits.confirmopButton.click();

        });

    it('14. Should go to Types of Examinations', function() {

        angularOrganizationUnits.typesExamButton.click();

        });

    it('15. Should click [+] : adding new type', function() {

        angularOrganizationUnits.addNewTypeButton.click();

        });

    it('16. Should fill the form properly and save it', function() {

        angularOrganizationUnits.theFormNameInput.sendKeys('Jakas tam testowa');
        angularOrganizationUnits.checkboxNr1Toggle.click();
        angularOrganizationUnits.formType.click();

            browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
            });

        angularOrganizationUnits.firstListElement.click();
        angularOrganizationUnits.saveExamTypeButton.click();

        });

    it('17. Should search for recently added type of examination', function() {

        angularOrganizationUnits.typesExamsStepsButton.click();
        angularOrganizationUnits.typesExamButton.click();
        angularOrganizationUnits.examSearchInput.sendKeys('Recently added type');

        });

    it('18. Should go to Types of Exams Steps', function() {

        angularOrganizationUnits.typesExamsStepsButton.click();

        });

    it('19. Should look for exam type ', function() {

        angularOrganizationUnits.examSearchInput.sendKeys('usg doppler inne');
        browser.waitForAngular();

        // browser.driver.wait(function() {
        //         return browser.driver.isElementPresent(by.css("a[ng-click='sCtrl.edit(item)']"));
        //     });

        });

    it('20. Should edit the exam type', function() {

        angularOrganizationUnits.examEditButton.click();

            browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("div[ng-init='datePickerOpen = {}']"));
            });

        });

   //problem with timing
    it('21. Should change the duration of examination', function() {

        angularOrganizationUnits.datePickerRow.click();

        for (var i = 0; i < 10; i++) {
        angularOrganizationUnits.incrementMinutesButton.click();
        }

        angularOrganizationUnits.saveExamTypeButton.click();

        });

    it('22. Should go to the Devices tab', function() {

        angularOrganizationUnits.devicesButton.click();

        });

    it('23. Should look for the device', function() {

        angularOrganizationUnits.examSearchInput.sendKeys('Ultrasonograf 2');
        browser.waitForAngular();

            // browser.driver.wait(function() {
            //     return browser.driver.isElementPresent(by.css("a[ng-click='sCtrl.edit(item)']"));
            // });

        });

    it('24. Should click edit the device', function() {

        angularOrganizationUnits.examEditButton.click();

            // browser.driver.wait(function() {
            //     return browser.driver.isElementPresent(by.model('formData.aETitle'));
            // });

        });

   //problem with timing
    it('25. Should change the AE Title and save the changes', function() {

        angularOrganizationUnits.aeTitleInput.clear();
        angularOrganizationUnits.aeTitleInput.sendKeys('US00999');
        angularOrganizationUnits.saveExamTypeButton.click();

        });

    it('26. Should go to the Doctors Portfolio tab', function() {

        angularOrganizationUnits.doctorsPortfolioButton.click();

        });

    it('27. Should click the proper icon to edit Lekarz Radiolog role', function() {

        angularOrganizationUnits.editLRRole.click();

        });

    it('28. Should edit the role and save the changes', function() {

        angularOrganizationUnits.checkbox16.click();
        angularOrganizationUnits.checkbox110.click();

        angularOrganizationUnits.checkbox26.click();
        angularOrganizationUnits.checkbox210.click();

        angularOrganizationUnits.checkbox36.click();
        angularOrganizationUnits.checkbox310.click();

        angularOrganizationUnits.checkbox15.click();
        angularOrganizationUnits.checkbox17.click();

        angularOrganizationUnits.checkbox25.click();
        angularOrganizationUnits.checkbox27.click();

        angularOrganizationUnits.checkbox35.click();
        angularOrganizationUnits.checkbox37.click();

        angularOrganizationUnits.saveButton.click();

        });

    it('29. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

    });

describe('TEST CR10 - should check the amount of available rooms at the beginning and after the changes', function() {

  it('1. Should log in properly ', function() {

    angularLoginPage.setUsername('godmode');
    angularLoginPage.setPassword('test1234');
    angularLoginPage.logIn();

  });

  it('2. Should go to Planning - Work Calendar', function() {

    angularHomePage.planningButton.click();
    angularHomePage.scheduleButton.click();

  });

  it('3. Should click "Rooms" button and check available rooms', function() {

    var iframe = element(by.css("iframe[ng-src='http://10.132.182.149/risweb_php/public/ris/schedule/interval']"));
    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("iframe[ng-src='http://10.132.182.149/risweb_php/public/ris/schedule/interval']"));  //
    }, 20000);
    browser.switchTo().frame(iframe.getWebElement());

    browser.sleep(10000);

    browser.driver.findElement(By.id('wc-button-rooms')).click();

    browser.driver.findElement(By.id('dayViewRoomSelectContainer')).findElements(By.tagName('li')).then(function(list) {
      expect(list.length).toEqual(11);
    });

  });

  it('4. Should go to Change Org. Units', function() {

    browser.switchTo().defaultContent();
    browser.waitForAngular();

    angularHomePage.allInOneButton.click();
    angularHomePage.setTargetOrganizationUnitsButton.click();

  });

  it('5. Should check certain checkboxes and save options', function() {

    angularHomePage.clickChecked(4);
    angularHomePage.clickChecked(3);
    angularHomePage.clickChecked(2);
    angularHomePage.clickChecked(1);

    angularHomePage.saveButton.click();

  });

  it('6. Should go to Planning - Work Calendar', function() {

    angularHomePage.planningButton.click();
    angularHomePage.scheduleButton.click();

  });

  it('7. Should click "Rooms" button and check available rooms', function() {

    var iframe = element(by.css("iframe[ng-src='http://10.132.182.149/risweb_php/public/ris/schedule/interval']"));
    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("iframe[ng-src='http://10.132.182.149/risweb_php/public/ris/schedule/interval']"));  //
    }, 20000);
    browser.switchTo().frame(iframe.getWebElement());

    browser.sleep(10000);

    browser.driver.findElement(By.id('wc-button-rooms')).click();

    browser.driver.findElement(By.id('dayViewRoomSelectContainer')).findElements(By.tagName('li')).then(function(list) {
      expect(list.length).toEqual(2);
    });

  });

  it('8. Should go to Change Org. Units', function() {

    browser.switchTo().defaultContent();
    browser.waitForAngular();

    angularHomePage.allInOneButton.click();
    angularHomePage.setTargetOrganizationUnitsButton.click();

  });

  it('9. Should check certain checkboxes and save options', function() {

    angularHomePage.clickUnChecked(3);

    angularHomePage.saveButton.click();

  });

  it('10. Should go to Planning - Work Calendar', function() {

    angularHomePage.planningButton.click();
    angularHomePage.scheduleButton.click();

  });

  it('11. Should click "Rooms" button and check available rooms', function() {

    var iframe = element(by.css("iframe[ng-src='http://10.132.182.149/risweb_php/public/ris/schedule/interval']"));
    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("iframe[ng-src='http://10.132.182.149/risweb_php/public/ris/schedule/interval']"));  //
    }, 20000);
    browser.switchTo().frame(iframe.getWebElement());

    browser.sleep(10000);

    browser.driver.findElement(By.id('wc-button-rooms')).click();

    browser.driver.findElement(By.id('dayViewRoomSelectContainer')).findElements(By.tagName('li')).then(function(list) {
      expect(list.length).toEqual(6);
    });

  });

  it('12. Should log out', function() {

    browser.switchTo().defaultContent();
    browser.waitForAngular();

    angularHomePage.allInOneButton.click();
    angularHomePage.logoutButton.click();

  });

  it('', function() {

  });

});

describe('TEST CR15 - test of default options in Dictionaries', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Dictionaries - Order Priority', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.dictionariesButton.click();
        angularListOfDict.orderPriority.click();

        });

    it('3. Check High Priority as default option and save the changes', function() {

        angularListOfDict.highPriorityCheckbox.click();
        angularListOfDict.saveButton.click();

        });

    it('4. Should go to Administration - Dictionaries - Types of Patient', function() {

        angularListOfDict.goBackButton.click();
        angularListOfDict.typesOfPatient.click();

        });

    it('5. Check Emergency as default option and save the changes', function() {

        angularListOfDict.emergencyCheckbox.click();
        angularListOfDict.saveButton.click();

        });

    it('6. Should go to Administration - Dictionaries - Types of Patients Statuses', function() {

        angularListOfDict.goBackButton.click();
        angularListOfDict.typesOfPatientsStatus.click();

        });

    it('7. Check State Unknown as default option and save the changes', function() {

        angularListOfDict.stateUnknownCheckbox.click();
        angularListOfDict.saveButton.click();

        });

    it('8. Should go to Administration - Dictionaries - Internal Transport', function() {

        angularListOfDict.goBackButton.click();
        angularListOfDict.internalTransport.click();

        });

    it('9. Check Wheelchair as default option and save the changes', function() {

        angularListOfDict.wheelchairCheckbox.click();
        angularListOfDict.saveButton.click();

        });

    it('10. Should go to Administration - Dictionaries - External Transport', function() {

        angularListOfDict.goBackButton.click();
        angularListOfDict.externalTransport.click();

        });

    it('11. Check Independent as default option and save the changes', function() {

        angularListOfDict.independentCheckbox.click();
        angularListOfDict.saveButton.click();

        });

    it('12. Should go to Orders - Add Order', function() {

        angularHomePage.goToAddOrder();
        browser.sleep(1000);

        browser.refresh();

        });

    it('13. Should check and compare the selected default options', function() {

        expect(element(by.cssContainingText('span.ng-scope', 'Priorytet zlecenia'))
                            .element(by.xpath('..'))
                            .element(by.xpath('..'))
                            .element(by.css("span[class='select2-chosen']")).getText()).toEqual('Wysoki');

        expect(element(by.cssContainingText('span.ng-scope', 'Rodzaj pacjenta'))
                            .element(by.xpath('..'))
                            .element(by.xpath('..'))
                            .element(by.css("span[class='select2-chosen']")).getText()).toEqual('Nagły wypadek');

        expect(element(by.cssContainingText('span.ng-scope', 'Stan pacjenta'))
                            .element(by.xpath('..'))
                            .element(by.xpath('..'))
                            .element(by.cssContainingText('div', 'Stan nieznany')).getText()).toEqual('Stan nieznany');

        expect(element(by.cssContainingText('span.ng-scope', 'Transport wewnętrzny'))
                            .element(by.xpath('..'))
                            .element(by.xpath('..'))
                            .element(by.css("span[class='select2-chosen']")).getText()).toEqual('Na wózku');

        expect(element(by.cssContainingText('span.ng-scope', 'Transport zewnętrzny'))
                            .element(by.xpath('..'))
                            .element(by.xpath('..'))
                            .element(by.css("span[class='select2-chosen']")).getText()).toEqual('Samodzielny');

    });

    it('14. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR16 - test of adding and deleting Global Device', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Global Modalities', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.globalModalitiesButton.click();

        });

    it('3. Should add the New Modality', function() {

        angularGlobalModalities.addNewButton.click();

        });

    it('4. Should fill the Name, AETitle and choose Modality Type', function() {

        angularGlobalModalities.newName.sendKeys('SomeName');
        angularGlobalModalities.newAETitle.sendKeys('SomeAETitle');
        angularGlobalModalities.modTypeDropdown.click();

        browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
            });

        angularGlobalModalities.firstListElement.click();

        });

    it('5. Should save the new modality and go back to the list', function() {

        angularGlobalModalities.saveButton.click();
        angularGlobalModalities.goBackButton.click();

        });

    it('6. Should look up for new modality - by name', function() {

        angularGlobalModalities.searchInput.sendKeys('SomeName');

        expect(element.all(by.repeater('item in reportCtrl.items'))
            .get(0)
            .isPresent()).toBe(true);

        });

    it('8. Remove the Modality', function() {

        angularGlobalModalities.removeButton.click();
        angularGlobalModalities.confirmRemovalButton.click();

        });

    it('9. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR17 - test of adding and deleting Payment Provider', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Payment Providers', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.paymentProvidersButton.click();

        });

    it('3. Should add the New Payment Provider', function() {

        angularGlobalModalities.addNewButton.click();

        });

    it('4. Should hide the details and add patient name', function() {

        angularPaymentProviders.hideShowDetailsButton.click();
        angularPaymentProviders.newName.sendKeys('SomeName');

        });

    it('5. Should save and go back to the list', function() {

        angularPaymentProviders.saveButton.click();
        angularPaymentProviders.goBackButton.click();

        });

    it('6. Should look up for new Payment Provider - by name', function() {

        angularPaymentProviders.searchInput.sendKeys('SomeName');

        expect(element.all(by.repeater('item in reportCtrl.items'))
            .get(0)
            .isPresent()).toBe(true);

        });

    it('7. Remove the Modality', function() {

        angularPaymentProviders.removeButton.click();
        angularPaymentProviders.confirmRemovalButton.click();

        });

    it('8. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR18 - test of adding and deleting Permissions', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Permissions', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.permissionsButton.click();

        });

    it('3. Should add the New Permission', function() {

        angularPermissions.addNewButton.click();

        });

    it('4. Should fill in the name and choose first permission from the list', function() {

        angularPermissions.newName.sendKeys('SomePermissionName');
        angularPermissions.permissionTypeDropdown.click();

        browser.driver.wait(function() {
                return browser.driver.isElementPresent(by.css("div[class='select2-result-label']"));
            });

        angularPermissions.firstListElement.click();

        });

    it('5. Should save the form', function() {

        angularPermissions.saveButton.click();
        angularPermissions.goBackButton.click();

        });

    it('6. Should look up for the new Permission', function() {

        angularPermissions.searchInput.sendKeys('SomePermissionName');

        expect(element.all(by.repeater('item in reportCtrl.items'))
            .get(0)
            .isPresent()).toBe(true);

        });

    it('7. Remove the Permission', function() {

        angularPermissions.removeButton.click();
        angularPermissions.confirmRemovalButton.click();

        });

    it('8. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR19 - test of UserList"s display and adding new User', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Users', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.usersButton.click();

        });

    it('3. Should change the amount of displayed Users to 5 and assert it', function() {

        angularUsers.chooseListOf5();
        expect(angularUsers.getPatientsNumber()).toEqual(5);

        });

    it('4. Should change the amount of displayed Users to 10 and assert it', function() {

        angularUsers.chooseListOf10();
        expect(angularUsers.getPatientsNumber()).toEqual(10);

        });

    it('5. Should change the amount of displayed Users to 20 and assert it', function() {

        angularUsers.chooseListOf20();
        expect(angularUsers.getPatientsNumber()).toEqual(20);

        });

    it('6. Should change the amount of displayed Users to 30 and assert it', function() {

        angularUsers.chooseListOf30();
        expect(angularUsers.getPatientsNumber()).toEqual(30);

        });

    it('7. Should change the amount of displayed Users to 50 and assert it', function() {

        angularUsers.chooseListOf50();
        expect(angularUsers.getPatientsNumber()).toEqual(50);

        });

    it('8. Should go to Add New User', function() {

        angularUsers.addNewButton.click();

        });

    it('9. Should click hide/showDetails Button', function() {

        angularUsers.hideShowDetailsButton.click();

        });

    //change the details to suit before test
    it('10. Should fill in Username, Password, Name and Surname', function() {

        angularUsers.username.sendKeys('SomeNewUserName');
        angularUsers.password.sendKeys('Some.New.Pass13');
        angularUsers.passwordRepeat.sendKeys('Some.New.Pass13');
        angularUsers.name.sendKeys('Username');
        angularUsers.surname.sendKeys('Usersurname');

        });

    it('11. Should save the form and go back to user"s list', function() {

        angularUsers.saveButton.click();
        angularUsers.goBackButton.click();

        });

    it('12. Should look up for the New User', function() {

        angularUsers.searchInput.sendKeys('SomeNewUserName');

        expect(element.all(by.repeater('item in reportCtrl.items'))
            .get(0)
            .isPresent()).toBe(true);

        });

    it('13. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR20 - test of Referring Physicians List"s display and adding new Reffering Physician', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Referring Physicians', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.referringPhysiciansButton.click();

        });

    it('3. Should change the amount of displayed Referring Physician to 5 and assert it', function() {

        angularReferringPhysicians.chooseListOf5();
        expect(angularReferringPhysicians.getPatientsNumber()).toEqual(5);

        });

    it('4. Should change the amount of displayed Referring Physician to 10 and assert it', function() {

        angularReferringPhysicians.chooseListOf10();
        expect(angularReferringPhysicians.getPatientsNumber()).toEqual(10);

        });

    it('5. Should change the amount of displayed Referring Physician to 20 and assert it', function() {

        angularReferringPhysicians.chooseListOf20();
        expect(angularReferringPhysicians.getPatientsNumber()).toEqual(20);

        });

    it('6. Should change the amount of displayed Referring Physician to 30 and assert it', function() {

        angularReferringPhysicians.chooseListOf30();
        expect(angularReferringPhysicians.getPatientsNumber()).toEqual(30);

        });

    it('7. Should change the amount of displayed Referring Physician to 50 and assert it', function() {

        angularReferringPhysicians.chooseListOf50();
        expect(angularReferringPhysicians.getPatientsNumber()).toEqual(50);

        });

    it('8. Should go to Add New Referring Physician', function() {

        angularReferringPhysicians.addNewButton.click();

        });

    //change the details to suit before test
    it('9. Should fill in Name, Surname and NPWZ', function() {

        angularReferringPhysicians.name.sendKeys('Testname');
        angularReferringPhysicians.surname.sendKeys('Testsurname');

        angularReferringPhysicians.addIdentifierButton.click();
        angularReferringPhysicians.identifierTypeDropdown.click();
        angularReferringPhysicians.getListElement(4).click();

        angularReferringPhysicians.identifierValue.sendKeys('123456');

        });

    it('10. Should save the form and go back to user"s list', function() {

        angularReferringPhysicians.saveButton.click();
        angularReferringPhysicians.goBackButton.click();

        });

    it('11. Should look up for the New User', function() {

        angularReferringPhysicians.searchInput.sendKeys('Testname');

        expect(element.all(by.repeater('item in reportCtrl.items'))
            .get(0)
            .isPresent()).toBe(true);

        });

    it('12. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR21 - test of Health Care List"s display and adding new Health Care Unit', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Health Care Units', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.hCUnitsButton.click();

        });

    it('3. Should change the amount of displayed Health Care Units to 5 and assert it', function() {

        angularHCUnits.chooseListOf5();
        expect(angularHCUnits.getPatientsNumber()).toEqual(5);

        });

    it('4. Should change the amount of displayed Health Care Units to 10 and assert it', function() {

        angularHCUnits.chooseListOf10();
        expect(angularHCUnits.getPatientsNumber()).toEqual(10);

        });

    it('5. Should change the amount of displayed Health Care Units to 20 and assert it', function() {

        angularHCUnits.chooseListOf20();
        expect(angularHCUnits.getPatientsNumber()).toEqual(20);

        });

    it('6. Should change the amount of displayed Health Care Units to 30 and assert it', function() {

        angularHCUnits.chooseListOf30();
        expect(angularHCUnits.getPatientsNumber()).toEqual(30);

        });

    it('7. Should change the amount of displayed Health Care Units to 50 and assert it', function() {

        angularHCUnits.chooseListOf50();
        expect(angularHCUnits.getPatientsNumber()).toEqual(50);

        });

    it('8. Should go to Add New Health Care Unit', function() {

        angularHCUnits.addNewButton.click();

        });

    it('9. Should hide fields, which are not required', function() {

        angularHCUnits.hideShowDetailsButton.click();

        });

    //change the details to suit before test
    it('10. Should fill in Health Care Unit name and type from the dropdown list', function() {

        angularHCUnits.hCUnitName.sendKeys('TestHCUnitName');

        angularHCUnits.hCUnitTypeDropdown.click();
        angularHCUnits.getListElement(0).click();

        });

    it('11. Should save the form and go back to the list', function() {

        angularHCUnits.saveButton.click();
        angularHCUnits.goBackButton.click();

        });

    it('12. Should look up for the New Health Care Unit', function() {

        angularReferringPhysicians.searchInput.sendKeys('TestHCUnitName');

        expect(element.all(by.repeater('item in reportCtrl.items'))
            .get(0)
            .isPresent()).toBe(true);

        });

    it('13. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR22 - test of Materials List display, adding Material and removing it afterwards', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Materials', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.materialsButton.click();

        });

    it('3. Should change the amount of displayed Materials to 5 and assert it', function() {

        angularMaterials.chooseListOf5();
        expect(angularMaterials.getPatientsNumber()).toEqual(5);

        });

    it('4. Should change the amount of displayed Materials to 10 and assert it', function() {

        angularMaterials.chooseListOf10();
        expect(angularMaterials.getPatientsNumber()).toEqual(10);

        });

    it('5. Should change the amount of displayed Materials to 20 and assert it', function() {

        angularMaterials.chooseListOf20();
        expect(angularMaterials.getPatientsNumber()).toEqual(20);

        });

    it('6. Should change the amount of displayed Materials to 30 and assert it', function() {

        angularMaterials.chooseListOf30();
        expect(angularMaterials.getPatientsNumber()).toEqual(30);

        });

    it('7. Should change the amount of displayed Materials to 50 and assert it', function() {

        angularMaterials.chooseListOf50();
        expect(angularMaterials.getPatientsNumber()).toEqual(50);

        });

    it('8. Should go to Add New Material', function() {

        angularMaterials.addNewButton.click();

        });

    //change the details to suit before test
    it('9. Should fill in the form', function() {

        angularMaterials.materialName.sendKeys('TestMaterial');

        angularMaterials.materialTypeDropdown.click();
        angularMaterials.getListElement(0).click();

        angularMaterials.materialUnitDropdown.click();
        angularMaterials.getListElement(0).click();

        });

    it('10. Should save the form and go back to the list', function() {

        angularMaterials.saveButton.click();
        angularMaterials.goBackButton.click();

        });

    it('11. Should look up for the New Material', function() {

        angularMaterials.searchInput.sendKeys('TestMaterial');

        expect(element.all(by.repeater('item in reportCtrl.items'))
            .get(0)
            .isPresent()).toBe(true);

        });

    it('12. Should remove the new Material', function() {

        angularMaterials.removeButton.click();
        angularMaterials.confirmRemovalButton.click();

        });

    it('13. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR23 - test of adding Organization Unit', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Administration - Organization Units', function() {

        angularHomePage.administrationButton.click();
        angularHomePage.organizationUnitsButton.click();

        });

    it('3. Should click plus to add new', function() {

        angularOrgUnits.mainPlusButton.click();

        });

    it('4. Should name the new unit and save it', function() {

        angularOrgUnits.newUnitName.sendKeys('JednostkaTestowa5');
        angularOrgUnits.saveUnitButton.click();

        });

    it('5. Should click plus to add new department', function() {

        //adjust to suit name!!!!!
        angularOrgUnits.unit1.click();
        angularOrgUnits.unit2.click();
        angularOrgUnits.newUnitPlusButton.click();

        });

    it('6. Should name the new department, check "The Final" option and save it', function() {

        angularOrgUnits.newSubUnitName.sendKeys('OddziałTestowy5');
        angularOrgUnits.newSubUnitFinalCheckbox.click();
        angularOrgUnits.newSubUnitSaveButton.click();

        });

    it('7. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR24 - should create and display Report - PROBLEM WITH iFRAME', function() {

    it('1. Should log in properly ', function() {

        angularLoginPage.setUsername('godmode');
        angularLoginPage.setPassword('test1234');
        angularLoginPage.logIn();

        });

    it('2. Should go to Report of Steps', function() {

        angularHomePage.reportButton.click();
        angularHomePage.performingUserRaportButton.click();
        browser.waitForAngular();
        browser.switchTo().frame(element(by.css("div[class='iframe-container ng-scope']")));

        });

    it('3. Should select all columns and groups', function() {

        angularReport.selectAllColumns.click();
        angularReport.selectAllGroups.click();

        });

    it('4. Should choose sort by option', function() {

        angularReport.sortDropdown.click();
        angularReport.firstListElement.click();

        });

    it('5. Should confirm it', function() {

        angularReport.confirmButton.click();

        });

    it('6. Should log out the user', function() {

        angularHomePage.allInOneButton.click();
        angularHomePage.logoutButton.click();

        });

    it('', function() {

        });

});

describe('TEST CR25 - should create and display Report', function() {

  it('1. Should log in properly ', function() {

    angularLoginPage.setUsername('godmode');
    angularLoginPage.setPassword('test1234');
    angularLoginPage.logIn();

  });

  it('2. Should go to Planning - Schedule', function() {

    angularHomePage.planningButton.click();
    angularHomePage.scheduleButton.click();

  });

  it('3. Should select proper time interval', function() {

    var iframe = element(by.css("iframe[ng-src='https://10.132.182.149/risweb_php/ris/schedule/interval']"));

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css("iframe[ng-src='https://10.132.182.149/risweb_php/ris/schedule/interval']"));  //
    }, 20000);

    browser.switchTo().frame(iframe.getWebElement());

    browser.sleep(15000);

    // browser.driver.findElement(By.id('wc-button-rooms')).click();
    // browser.driver.findElement(By.xpath('//*[@id="dayViewRoomSelectContainer"]/ul/li[2]/a')).click();
    // browser.driver.findElement(By.xpath('//*[@id="dayViewRoomSelectContainer"]/ul/li[3]/a')).click();
    // browser.driver.findElement(By.xpath('//*[@id="dayViewRoomSelectContainer"]/ul/li[4]/a')).click();
    // browser.driver.findElement(By.xpath('//*[@id="dayViewRoomSelectContainer"]/ul/li[5]/a')).click();

    browser.sleep(5000);

    browser.driver.findElements(By.className('fc-widget-content')).then(function(rows) {
      console.log(rows.length);

      browser.driver.actions()
      .mouseDown(browser.driver.findElement(By.className('fc-slot1')).findElement(By.className('fc-widget-content')))
      .mouseMove({x: 1, y: 100})
      .mouseUp()
      .perform();

    });

    browser.sleep(20000);

  });

  it('4. Should check if time interval is fine', function() {

    browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_day_')).getAttribute('value')).toEqual(angularSchedule.getCurrentYMD());
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_beginTime_')).getAttribute('value')).toEqual('00:10');
    });

    browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).then(function(rows) {
      expect(browser.driver.findElement(By.id('i_scheduleTimeInterval_endTime_')).getAttribute('value')).toEqual('01:20');
    });

  });

  it('5. Should select color and type of schedule', function() {

    browser.driver.findElement(By.linkText('Proszę podać kolor')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[12]/ul/li[4]/div/span')).click();
    });

    browser.driver.findElement(By.linkText('Proszę podać typ grafiku')).click().then(function() {
      browser.driver.findElement(By.xpath('//html/body/div[13]/ul/li[1]/div')).click();
    });

  });

  it('6. Should save the form', function() {

    browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).then(function(rows) {
      browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[3]/input[2]')).click();
    });

  });

  it('7. Should right click on selection and remove it', function() {

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(By.className('fc-event-border'));  //
    }, 22000).then(function() {

      browser.driver.actions()
      .mouseMove(browser.driver.findElement(By.className('fc-event-border')))
      .click(protractor.Button.RIGHT)
      .perform();

      browser.sleep(10000);
    });

    browser.driver.wait(function() {
      return browser.driver.isElementPresent(By.className('contextMenuPlugin'));  //
    }, 22000).then(function() {

      browser.driver.actions()
      .mouseMove(browser.driver.findElement(By.className('contextMenuPlugin')).findElement(By.linkText('Usuń')))
      .click(protractor.Button.LEFT)
      .perform();

      browser.sleep(10000);
    });

    browser.driver.findElement(By.xpath('//*[@id="modalHelper"]/div[2]/input[2]')).click();

  });

  it('8. Should log out', function() {

    browser.switchTo().defaultContent();
    browser.waitForAngular();

    angularHomePage.allInOneButton.click();
    angularHomePage.logoutButton.click();

  });

  it('', function() {

  });

});