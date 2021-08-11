

$( document ).ready(function() {
    document.getElementById("loginButtom").addEventListener("click", function(){
	var email = document.getElementById('userEmail');
	var psw = document.getElementById('userPassword');
	console.log(email.value);
	console.log(psw.value);
	});
});
