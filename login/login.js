function validate() {
	var loginBox = document.getElementById("loginBox");
	var username = document.getElementById("username");
	var password = document.getElementById("password");

	var httpRequest = new XMLHttpRequest();
	var params = 'username=' + username.value + '&password=' + password.value;

	httpRequest.open('POST', '/auth', true);
	httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	httpRequest.responseType = "json";

	httpRequest.onreadystatechange = function() {
			if(httpRequest.readyState == 4 && httpRequest.status == 200) {
				loginBox.style.display = "none";
				if(httpRequest.response.success){
					setCookie("loginToken", httpRequest.response.token, 1);
					showToast();
					alert(httpRequest.response.message);
					//window.open("/protected?token=" + httpRequest.response.token, "_self");
					//window.open("/protected", "_self");
				}
			}
	}
	httpRequest.send(params);
}

function showToast() {
	var toast = document.getElementById("toast");

	toast.className = "show";

	setTimeout(function(){
		toast.className = ""
	}, 3000);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}