'use strict';
var AngularReport = function() {
	this.selectAllColumns = element(by.cssContainingText('h2.pull-left', 'Zlecone kroki badań'))
	.element(by.xpath('../..')).element(by.css("button[class='btn btn-small js-columns-select-all-btn']"));
	this.selectAllGroups = element(by.css("button[class='btn btn-small js-groups-select-all-btn']"));
	this.sortDropdown = element(by.css("div[class='select2-container qe-selected qe-available select2 select2-container-active']"));
	this.firstListElement = element.all(by.css("div[class='select2-result-label']")).get(0);
	this.confirmButton = element(by.cssContainingText('button.js-qe-exec-btn', 'Zatwierdź'));
};

module.exports = AngularReport;