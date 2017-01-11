'use strict'

Array.prototype.toTwenty = function () {
  	var twentyArray = [];

	for(var i = 1; i <= 20; i++){
	    twentyArray.push(i);
	}
console.log(twentyArray);
};

Array.prototype.toForty = function () {
  	var fortyArray = [];
  	var i = 2;
	while( i <= 40){
	    fortyArray.push(i);
	    i+=2;
	}
console.log(fortyArray);
};

Array.prototype.search = function (searchElement) {
this.count = 0;
this.index = 0;

	var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            this.index = currentIndex;
        }
	this.count++
    }

    this.index = -1;
return this;
};

Array.prototype.toOneThousand = function () {
  var thousandArray = [];
	var i = 10;
	while( i <= 1000){
	    thousandArray.push(i);
	    i+=10;
	}
console.log(thousandArray);
};
//Array.prototype.indexOf = function () {
 // throw new Error('You are not allowed to use the indexOf function');
///};

var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();

//module.exports = oneToTwenty;



