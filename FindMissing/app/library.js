'use strict'

module.exports = {

findMissing: function(arr1, arr2){
var array1Length = arr1.length;
var array2Length = arr2.length;
var arr1S = 0;
var arr2S = 0; 

    if ((array1Length < 1) || (array2Length < 1)) { return 0; }

	for (var z=0; z<array1Length; z++){
		arr1S += arr1[z];
	}

    for (var x=0; x<array2Length; x++){
    	arr2S += arr2[x];
	}
return missingNumber = arr2S - arr1S;

}
}