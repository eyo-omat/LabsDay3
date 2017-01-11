'use strict'

module.exports = {

findMissing: function(arr1, arr2){
var array1Length = arr1.length;
var array2Length = arr2.length;
var numberPresent = function (y, arr) {
	for (var z in arr){
		if (y === z) { 
			return true; 
		} 
	return false;
	}
}
    if ((array1Length < 1) || (array2Length < 1)) { return 0; }
    for (var x in arr1){
    	if (!numberPresent(x, arr2)) {
    		return x;
		} else { 
			return 0; 
		}
	}




}
}