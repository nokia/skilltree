function validate() {
	var loginBox = document.getElementById("loginBox");
	var username = document.getElementById("username");
	var password = document.getElementById("password");

	var http = new XMLHttpRequest();
	var params = 'username=' + username.value + '&password=' + password.value;

	http.open('POST', '/auth', true);
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	http.responseType = "json";

	http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status == 200) {
				loginBox.style.display = "none";
				if(http.response.success){
					alert(http.response.message);
					console.log(http.response.token);
					showToast();
				}
			}
	}
	http.send(params);
}

function showToast() {
	var toast = document.getElementById("toast");

	toast.className = "show";

	setTimeout(function(){
		toast.className = ""
	}, 3000);
}
