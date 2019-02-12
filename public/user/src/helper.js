// checks password difficulty
function checkPassword (pw) {
	var expr = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

	if (expr.test(pw)) return true;
	return false;
}

// converts encoded token to usable data
function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

// sums one elements values in an object array
Array.prototype.sum = function (prop) {
    let total = 0;

    for (var i = 0; i < this.length; ++i) {
        total += this[i][prop];
    }

    return total;
}

// showing bootstrap alert line (every type except danger closes itself after 3 seconds)
function showBottomAlert (type, msg) { // type: success, danger, warning, ...
    document.getElementById('bottomAlert').className = 'alert alert-dismissible alert-' + type;
	document.getElementById('bottomAlertMsg').innerText = msg;

	$('#bottomAlert').show();

    if (type != 'danger') setTimeout(function () {$('#bottomAlert').hide();}, 3000);
}

// function for simplifying api requests
function request (type, url, sendData, callback) {
    let req = new XMLHttpRequest();
    req.open(type, url, true);
    req.setRequestHeader('Content-type', 'application/json');
    req.setRequestHeader('x-access-token', localStorage.getItem("loginToken"));
    req.responseType = "json";
    req.onreadystatechange = callback;

    if (sendData !== undefined)
        req.send(JSON.stringify(sendData));
    else
        req.send();
}
