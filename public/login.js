// checks login data and redirects to the user page after successful login
function validate() {
	var loginBox = document.getElementById("loginBox");
	var username = document.getElementById("username");
	var password = document.getElementById("password");

	var httpRequest = new XMLHttpRequest();

	httpRequest.open('POST', '/auth', true);
	httpRequest.setRequestHeader('Content-type', 'application/json');
	httpRequest.responseType = "json";

	//Listener, if response comes, it runs.
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			if(httpRequest.response.success){
				localStorage.setItem("loginToken", httpRequest.response.token);
				window.open('/user','_self');
			} else {
				showBottomAlert("Wrong username or password!");
			}
		}
	};

	httpRequest.send(
		JSON.stringify({
			username: username.value,
			password: password.value
		})
	);
}

// showing danger bottom alert with a specific message
function showBottomAlert (msg) {
	document.getElementById('bottomAlertMsg').innerText = msg;
	$('#bottomAlert').show();
}

// hiding bottom alert after click
function hideAlert (event) {
    $(".alert").hide();
}
document.body.addEventListener('click', hideAlert);

// unsupported browser alert
document.addEventListener('DOMContentLoaded', function() {
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  var isEdge = !isIE && !!window.StyleMedia;
  if (isIE || isEdge) showBottomAlert("You are using an unsupported browser. Please use Mozilla Firefox or Google Chrome.");
}, false);
