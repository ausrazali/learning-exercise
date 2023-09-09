// Test Object for Property Name

function checkForProperty(object, property){
	return object.hasOwnProperty(property);
}

console.log(checkForProperty({top: "hat", bottom: "pants"}, "top"));


// Test Object for Property Value

function   checkForValue(objTest, valueToCheck){
	for (let   name   in   objTest){
		if (objTest.hasOwnProperty(name) &&   objTest[name] ===   valueToCheck) {
			return   true;
		}
	}
}

const   obj   = {
	top:   "head",
	bottom:   "leg"
};

console.log(checkForValue(obj, "head"));

// Return object value

function checkObj(obj, checkProp) {
	let result = obj.hasOwnProperty(checkProp);
	if(result === true){
		return obj[checkProp];
	} else {
		return "Not Found";
	}
}

console.log(checkObj({top: "hat", bottom: "pants"}, "top"));