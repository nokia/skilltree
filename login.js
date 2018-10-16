var attempt = 3;

function validate() {
	var loginBox = document.getElementById("loginBox");
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var submit = document.getElementById("submit");

	var loginData = {user: {email: username, password: password}};

    var loginRequest = new XMLHttpRequest();
    loginRequest.open("POST", '/chartandtree.html', true);

    loginRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    loginRequest.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var resp = this.response;
            console.log(resp.token);
        }
    }
    loginRequest.send(loginData);

    /*if(username.value == "test" && password.value == "TEST") {
		loginBox.style.display = "none";
		showToast();
		window.open("chartandtree.html", "_self");
		return false;
	}
	else {
		attempt--;
		alert("Incorrect credentials. You have " + attempt + " more attempts to access.");
		if(attempt == 0 ) {
			username.disabled = true;
			password.disabled = true;
			submit.style.display = "none";
			return false;
		}
	}*/
}

function showToast() {
	var toast = document.getElementById("toast");

	toast.className = "show";

	setTimeout(function(){
		toast.className = ""
	}, 3000);
}