'use strict'

module.exports = {

findMissing: function(arr1, arr2){
var array1Length = arr1.length;
var array2Length = arr2.length;
var arr1 = arr1.sort();
var arr2 = arr2.sort(); 
var missingNumber = 0;
var numberPresent = function (y, arr) {
	for (var z=0; z<arr.length; z++){
		if (y === arr[z]) { 
			return true; 
		} 
	return false;
	}
};
    if ((array1Length < 1) || (array2Length < 1)) { return 0; }
    for (var x=0; x<array2Length; x++){
    	if (!numberPresent(arr2[x], arr1)) {
    		missingNumber = arr2[x];
    		break;
		}
	}
return missingNumber;

}
}