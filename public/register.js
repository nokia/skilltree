function validate() {
	var loginBox = document.getElementById("loginBox");
	var username = document.getElementById("username");
	var password1 = document.getElementById("password1");
	var password2 = document.getElementById("password2");
	var email = document.getElementById("email");
	var focusarea = document.getElementById("focusarea");

	if (password1.value == password2.value) {
		if (validateEmail(email.value)) {
			if (checkPassword(password1.value)) {
				var httpRequest = new XMLHttpRequest();
				httpRequest.open('POST', '/registration', true);
				httpRequest.setRequestHeader('Content-type', 'application/json');
				httpRequest.responseType = "json";

				//Listener, if response comes, it runs.
				httpRequest.onreadystatechange = function() {
		    		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
						if (httpRequest.response.success) {
							localStorage.setItem("loginToken", httpRequest.response.token);
							window.open("/user", "_self");
						} else showToast();
					}
				}

				httpRequest.send(
					JSON.stringify({
						username: username.value,
						password: password1.value,
						email: email.value,
						focusArea: focusarea.value
					})
				);
			} else alert("The password is not valid! It has to contain at least one digit, one lowercase and one uppercase character. The minimum password length is 8 characters.");
		} else alert("The email address is not valid!");
	} else alert("Incorrect credentials! Passwords don't match!");
}

function validateEmail (email) {
	var expr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (expr.test(email)) return true;
	return false;
}

function checkPassword (pw) {
	var expr = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

	if (expr.test(pw)) return true;
	return false;
}

function showToast() {
	var toast = document.getElementById("toast");

	toast.className = "show";

	setTimeout(function(){
		toast.className = ""
	}, 3000);
}
