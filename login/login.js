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
					setCookie("loginToken", http.response.token, 1);
					showToast();
					alert(http.response.message);
					//window.open("/protected?token=" + http.response.token, "_self");
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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}