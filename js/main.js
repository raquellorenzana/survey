var surveyArray = []

function submitForm() {
	var form = document.getElementById('form')
	var questionThree = document.getElementById('questionThree').value
	var questionOne = form.elements.checkbox
	var questionTwo = form.elements.radio
	var questionOneArray = []
	var x = "Thank you for participating!"
	document.getElementById('container').innerHTML = x
	

	for(i=0; i< questionOne.length; i++) {
		if (questionOne[i].checked) {
			questionOneArray.push(questionOne[i].value)	
		}
	}

	for(i=0; i < questionTwo.length ; i++) {
		if (questionTwo[i].checked) {
			var questionTwoValue = questionTwo[i].value
		}
	}
	
	var newSurvey = {	
		question1: questionOneArray,
		question2: questionTwoValue,
		question3: questionThree
	}

	console.log(questionOneArray)
	console.log(questionTwoValue)
	console.log(questionThree)

	surveyArray.push(newSurvey)
	console.log(surveyArray)


}

var display = document.getElementById('submit')
display.addEventListener('click', submitForm, false)

























































