'use strict'

Array.prototype.indexOf = function () {
  throw new Error('You are not allowed to use the indexOf function');
};

Array.prototype.toTwenty = function () {
  	var twentyArray = [];

	for(var i = 1; i <= 20; i++){
	    twentyArray.push(i);
	}
console.log(twentyArray);
};

Array.prototype.toForty = function () {
  	var fortyArray = [];

	for(var i = 2; i <= 20; i+2){
	    fourtyArray.push(i);
	}
console.log(fourtyArray);
};

Array.prototype.search = function () {
  throw new Error('You are not allowed to use the indexOf function');
};

Array.prototype.toOneThousand = function () {
  var thoysandArray = [];

	for(var i = 10; i <= 1000; i+10){
	    thousandArray.push(i);
	}
console.log(thousandArray);
};

var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();
var search = function(x) {

}


module.exports = {
	oneToTwenty : oneToTwenty,
	twoToForty : twoToForty,
	tenToOneThousand : tenToOneThousand,
	search : search
}