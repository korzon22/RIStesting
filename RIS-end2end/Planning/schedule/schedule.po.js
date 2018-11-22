'use strict';

var AngularSchedule = function() {

	this.getCurrentYMD = function() {
    function addZero(i) {
      if (i < 10) {
        i = '0' + i;
      }

    return i;
    }

    var date = new Date();
    var d =  addZero(date.getDate());
    var m = addZero((date.getMonth()) + 1);
    var y = date.getFullYear();

    var s = (y + '-' + m + '-' + d);

    return (s);

  };

};

module.exports = AngularSchedule;
