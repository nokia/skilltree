function validate() {
	let loginBox = document.getElementById("loginBox");
	let username = document.getElementById("username");
	let password = document.getElementById("password");

	let httpRequest = new XMLHttpRequest();

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

function showBottomAlert(msg) {
	document.getElementById('bottomAlertMsg').innerText = msg;
	$('#bottomAlert').show();
}

function hideAlert (event) {
    $(".alert").hide();
}

document.body.addEventListener('click', hideAlert);
