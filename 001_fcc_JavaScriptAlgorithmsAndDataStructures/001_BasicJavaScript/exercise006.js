/*
Function `checkObj` should test if the object passed to the function parameter `obj`
contains the specific property passed to the function parameter `checkProp`.
If the property passed to `checkProp` is found on `obj`, return that property's value.
If not, return `Not Found`.
*/

function checkObj(obj, checkProp){
	checkResult = obj.hasOwnProperty(checkProp);
	if (checkResult === true){
		return obj[checkProp];
	} else {
		return "Not Found";
	}
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));

/*
Test parameter:
`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` should return the string `pony`.
*/
