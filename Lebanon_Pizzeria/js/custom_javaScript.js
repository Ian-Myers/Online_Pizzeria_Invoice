function testJS() {
	var total = 0; /* Defines the starting total that is to be added on to throughout the program */
	var sizeTotal = 0; /* Defines the starting total price for the size of the pizza */
	var sizeArray = document.getElementsByClassName('size'); /* Creates an array with all the elements that have the class name 'size' */
	for (var i = 0; i < sizeArray.length; i++) { /* Conditional statement that counts the number of elements in the array */
		if (sizeArray[i].checked) { /* DOM command checked is used to identify which elements are checked off, and if they are, move to the next statement */
			var selectedSize = sizeArray[i].value; /* Defines a new variable that retrieves the value of the checked element */
		}
	}
	if (selectedSize === "Personal Size") { /* Using the new variable defined above, determine which value has been checked for selectedSize */
		sizeTotal = 6; /* Depending on which element was checked, sizeTotal is defined with a price */
	} else if (selectedSize === "Medium Size") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Size") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Size") {
		sizeTotal = 16;
	}
	total = sizeTotal; /* The total price for the order is only the price of the size of the pizza right now */
	document.getElementById("check_out").style.opacity=1;
	document.getElementById("invoiced_size").innerHTML=selectedSize;
	document.getElementById("invoiced_size_amount").innerHTML="$"+sizeTotal;
	getSauceTotal(total);
};

function getSauceTotal(total) {
	var total = total;
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName('sauce');
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "Barbeque Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
	}
	total = total + sauceTotal;
	document.getElementById("invoiced_sauce").innerHTML=selectedSauce;
	document.getElementById("invoiced_sauce_amount").innerHTML="$"+sauceTotal;
	getCheeseTotal(total);
};

function getCheeseTotal(total) {
	var total = total;
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName('cheese');
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
		}
	}
	if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	total = total + cheeseTotal;
	document.getElementById("invoiced_cheese").innerHTML=selectedCheese;
	document.getElementById("invoiced_cheese_amount").innerHTML="$"+cheeseTotal;
	getCrustTotal(total);
};

function getCrustTotal(total) {
	var total = total;
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName('crust');
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	}
	total = total + crustTotal;
	document.getElementById("invoiced_crust").innerHTML=selectedCrust;
	document.getElementById("invoiced_crust_amount").innerHTML="$"+crustTotal;
	getMeatTotal(total);
};

function getMeatTotal(total) {
	var total = total;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	total = meatTotal + total;
	document.getElementById("invoiced_meat").innerHTML=selectedMeat;
	document.getElementById("invoiced_meat_amount").innerHTML="$"+meatTotal;
	getVeggieTotal(total);
};

function getVeggieTotal(total) {
	var total = total;
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggie");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	total = veggieTotal + total;
	document.getElementById("invoiced_veggie").innerHTML=selectedVeggie;
	document.getElementById("invoiced_veggie_amount").innerHTML="$"+veggieTotal;
	document.getElementById("invoiced_receipt").innerHTML="$"+total;
};