function validate() {
	var loginBox = document.getElementById("loginBox");
	var username = document.getElementById("username");
	var password1 = document.getElementById("password1");
	var password2 = document.getElementById("password2");
	var email = document.getElementById("email");

	if(password1.value == password2.value){
		var http = new XMLHttpRequest();
		var params = 'username=' + username.value + '&password=' + password.value + '&email=' + email.value;

		http.open('POST', '/registration', true);
		//http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		http.responseType = "json";

		http.onreadystatechange = function() {
		    if(http.readyState == 4 && http.status == 200) {
					loginBox.style.display = "none";
					if(http.response.success){
						showToast();
					}
		    }
		}
		http.send(params);
	}
	else{
		alert("Incorrect credentials! Passwords don't match!");
	}
}

function showToast() {
	var toast = document.getElementById("toast");

	toast.className = "show";

	setTimeout(function(){
		toast.className = ""
	}, 3000);
}
