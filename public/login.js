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
					
					
					var httpRequest2 = new XMLHttpRequest();
					httpRequest2.open('GET', './get/user');
					httpRequest2.setRequestHeader('Content-type', 'application/json');
					httpRequest2.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
					httpRequest2.send();
				} else {
                    showToast();
                }
			}
	}
	httpRequest.send( 
		JSON.stringify({
			username: username.value,
			password: password.value
		})
	 );
}

function showToast() {
	var toast = document.getElementById("toast");

	toast.className = "show";

	setTimeout(function(){
		toast.className = ""
	}, 3000);
}