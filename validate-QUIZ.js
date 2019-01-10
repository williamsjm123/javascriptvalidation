function validate()
{
    /*String to be used in alert method when form submits*/
	var alertString="";

    /*Boolean to decide if form submits*/
	var isValid = true;

    /*User's score to be submitted*/
	var score = 0;

    /*Checks name field isn't blank.
    If blank, sets question to yellow colour, alerts user that the question was not answered properly 
    and ensures form won't submit*/
	var name = document.forms[0].UserInfo.value;
    if (name == "") 
    {
    	alertString = alertString + " Please enter a name. ";
    	document.getElementById("UserInfo").style.backgroundColor = "yellow";
        isValid = false;
    }

    /*Checks question 1 answer isn't blank.
    If blank, sets question to yellow colour, alerts user that the question was not answered properly 
    and ensures form won't submit*/
    var q1 = document.forms[0].Q1.value;
    if (q1 == "") 
    {
    	alertString = alertString + " Please answer question 1. ";
    	document.getElementById("Q1").style.backgroundColor = "yellow";
        isValid = false;
    }

    /*If correct answer given to question 1, adds 1 to score*/
    if (q1 == "c") 
    {
        score+=1;
    }

    /*Counts number of checked checkboxes for question 2.
    Adds 1 to  score for each correctly cecked answer.*/
    var numberChecked = 0;
    var q2a = document.forms[0].Q2a.checked;
    if(q2a==true){
    	numberChecked +=1;
        score+=1;
    }
    var q2b = document.forms[0].Q2b.checked;
    if(q2b==true){
    	numberChecked +=1;
    }
    var q2c = document.forms[0].Q2c.checked;
    if(q2c==true){
    	numberChecked +=1;
        score+=1;
    }
    var q2d = document.forms[0].Q2d.checked;
    if(q2d==true){
    	numberChecked +=1;
    }

    /*Checks whether user has selected 2 checkboxes for question 2.
    If not, sets question to yellow colour, alerts user that the question was not answered properly 
    and ensures form won't submit*/
    if (numberChecked != 2) 
    {
    	alertString = alertString + " Please select 2 options for question 2. ";
    	document.getElementById("Q2").style.backgroundColor = "yellow";
        isValid = false;
    }

    /*Checks question 3 answer has been selected from radio buttons.
    If not, sets question to yellow colour, alerts user that the question was not answered properly 
    and ensures form won't submit*/
    var q3 = document.forms[0].Q3.value;
    
    if (q3.length != 1) 
    {
    	alertString = alertString + " Please answer question 3. ";
    	document.getElementById("Q3").style.backgroundColor = "yellow";
        isValid = false;
    }

    /*If correct answer given to question 3, adds 1 to score*/
    if (q3 == "b") 
    {
        score+=1;
    }

    /*Checks question 4 answer isn't blank.
    If blank, sets question to yellow colour, alerts user that the question was not answered properly 
    and ensures form won't submit*/
    var q4 = document.forms[0].Q4.value;
    if (q4 == "") 
    {
    	alertString = alertString + " Please answer question 4. ";
    	document.getElementById("Q4").style.backgroundColor = "yellow";
        isValid = false;
    }

    /*If correct answer given to question 4, adds 1 to score.
    Allows uppercase and lowercase letters.*/
    if (q4.toLowerCase() == "british australian and new zealand") 
    {
        score+=1;
    }

    /*Sets form hidden field to score achieved*/
    document.forms[0].thisScore.value = score;

    /*Checks if the overall form is valid using boolean. 
    Alerts the user with the alert string if not. 
    Alerts the user with their score if form is valid.*/
    if(isValid==false)
    {
    	alert(alertString);
    }
    else{
        alert("Your score is: " + score + ". It has been submitted to the server.");
    }

    /*Returns a boolean to indicate whether overall form is valid for submission*/
    return isValid;
}