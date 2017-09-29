function calculate() {
	
		document.getElementById("answer").innerHTML = "";

		var number1 = parseFloat(document.getElementById("number1").value);
		var number2 = parseFloat(document.getElementById("number2").value);

		var operatorSelection = document.getElementById('operatorSelection').value;
		
		if(operatorSelection == "default") {
			window.alert("You didn't pick the operator!");
		} else if (operatorSelection == "add") {
			var answer = number1 + number2;
		} else if (operatorSelection == "subtract") {
			var answer = number1 - number2;
		} else if (operatorSelection == "multiply") {
			var answer = number1 * number2;
		} else {
			var answer = number1 / number2;
		}

		document.getElementById("answer").style.visibility="visible";
		document.getElementById("answer").innerHTML += answer;
}