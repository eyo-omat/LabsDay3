'use strict'

Array.prototype.toTwenty = function () {
  
	for(var i = 1; i <= 20; i++){
	    this.push(i);
	}
	return this;
};

Array.prototype.toForty = function () {
  	
  	var i = 2;
	while( i <= 40){
	    this.push(i);
	    i+=2;
	}
	return this;
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
	this.count++;
    }

    this.index = -1;
return this;
};

Array.prototype.toOneThousand = function () {
  
	var i = 10;
	while( i <= 1000){
	    this.push(i);
	    i+=10;
	}
	return this;
};

var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();


