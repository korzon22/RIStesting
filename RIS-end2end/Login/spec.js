'use strict';

var AngularLoginPage = require('./login.po');

describe('LoginPage Tests', function() {
	it('Should check, if login works', function() {
		var angularLoginPage = new AngularLoginPage();

		angularLoginPage.get();
		angularLoginPage.setUsername('godmode');
		angularLoginPage.setPassword('test1234');
		angularLoginPage.logIn();
	});
});