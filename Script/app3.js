/*app3.js> Hanvinder Singh Rai> Portfolio> JavaScript for the contact page*/
(function () {
	// avoding error from other pages
	if (document.getElementById("about") != null) {
		console.log("About Page");
	}
	else if (document.getElementById("project") != null) {
		console.log("Projects Page");
	}
	else if (document.getElementById("contact") != null) {
		console.log("Contact Page");
		
		//variable and reference 
		var Name = document.getElementById("Name");
		var surname = document.getElementById("surname");
		var email = document.getElementById("email");
		var telephone = document.getElementById("telephone");
		var textarea = document.getElementById("textarea");
		var submitButton = document.getElementById("submitButton");
		submitButton.pre

		// returning data
		submitButton.addEventListener("click", function (event) {
			event.preventDefault();
			console.log("Name: " + Name.value);
			console.log("Surname: " + surname.value);
			console.log("Email: " + email.value);
			console.log("Telephone: " + telephone.value);
			console.log("Message: " + textarea.value);
		});


	} // end else if
})();