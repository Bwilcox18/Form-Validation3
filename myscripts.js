var form = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
	if (email.validity.valid) {
		//In case there is an error message visible,
		//if the field is valid we remove the message
		error.innerHTML = "";
		error.className = "error";
	}
}, false);
form.addEventListener("submit", function (event) {
	if (!email.validity.valid) {
		
		//If the field is not valid, we display a custom
		//error message
		error.innerHTML = "I expect an email, darling!";
		error.className = "error actice";
		//Prevent the form from being sent by cancelling the event
		event.preventDefault();
	}
}, false);