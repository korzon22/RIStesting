'use strict';

var AngularLoginPage = function() {
  this.usernameInput = element(by.model('credentials.username'));
  this.passwordInput = element(by.model('credentials.password'));
  this.logInButton = element(by.css('button'));

  this.get = function() {
    browser.get('#/login');
  };

  this.setUsername = function(name) {
    this.usernameInput.sendKeys(name);
  };

  this.setPassword = function(password) {
    this.passwordInput.sendKeys(password);
  };

  this.logIn = function() {
    this.logInButton.click();
  };

};

module.exports = AngularLoginPage;