function validate() {
	var loginBox = document.getElementById("loginBox");
	var username = document.getElementById("username");
	var password1 = document.getElementById("password1");
	var password2 = document.getElementById("password2");
	var email = document.getElementById("email");

	if(password1.value == password2.value){
		var httpRequest2 = new XMLHttpRequest();
		httpRequest2.open('POST', '/registration', true);
		httpRequest2.setRequestHeader('Content-type', 'application/json');
		httpRequest2.send();
		console.log(httpRequest2.response);

		//Listener, if response comes, it runs.
		httpRequest.onreadystatechange = function() {
		    if(httpRequest.readyState == 4 && httpRequest.status == 200) {
					
					if(httpRequest.response.success){
						
						window.open("/", "_self");
					}
					else {showToast(); }
			}
			
		}
		httpRequest.send(
			JSON.stringify({
				username: username.value,
				password: password1.value,
				email: email.value
			})
		);
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
