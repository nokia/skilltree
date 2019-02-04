function validate() {
	var loginBox = document.getElementById("loginBox");
	var username = document.getElementById("username");
	var password1 = document.getElementById("password1");
	var password2 = document.getElementById("password2");
	var email = document.getElementById("email");
	//var focusarea = document.getElementById("focusarea");
	//var willingToTeach = document.getElementById("teach");

	if (password1.value == password2.value) {
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
						} else showBottomAlert("Incorrect credentials! Username already taken.");
					}
				}

				httpRequest.send(
					JSON.stringify({
						username: username.value,
						password: password1.value,
						email: email.value//,
						//focusArea: focusarea.value,
						//willingToTeach: willingToTeach.checked
					})
				);
			} else showBottomAlert("The password is not valid! It has to contain at least one digit, one lowercase and one uppercase character. The minimum password length is 8 characters.");
	} else showBottomAlert("Incorrect credentials! Passwords don't match!");
}

function checkPassword (pw) {
	var expr = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

	if (expr.test(pw)) return true;
	return false;
}

function showBottomAlert(msg) {
	document.getElementById('bottomAlertMsg').innerText = msg;
	$('#bottomAlert').show();
}

function hideAlert (event) {
    if (!event.target.matches("#submit")) $(".alert").hide();
}

document.body.addEventListener('click', hideAlert);

window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                showBottomAlert("Incorrect credentials!");
            } //else $('.invalid-alert').hide();
            form.classList.add('was-validated');
        }, false);
    });
}, false);
