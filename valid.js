function validator () {
	var fname=document.forms["myForm"]["fname"].value;
	var lname=document.forms["myForm"]["lname"].value;
	var email=document.forms["myForm"]["email"].value;
	var password=document.forms["myForm"]["password"].value;
	var mobile=document.forms["myForm"]["mobile"].value;
	var rpassword=document.forms["myForm"]["rpassword"].value;
	
	
	if (fname=="" ||fname==null) {
		alert("Enter first name");
	}
	if (fname[0] != fname[0].toUpperCase()) {
		alert('Name to start from capital letter');
	}
	if (lname=="" ||lname==null) {
		alert("Enter last name");
	}
		if (lname[0] != lname[0].toUpperCase()) {
		alert('Name to start from a capital letter');
	}
	if (email=="" ||email==null) {
		alert("Enter email id");
	}
	if (email.indexOf('.com')==-1 || email.indexOf('@')==-1) {
		alert("Not a valid email id.");
	}
	if (password=="" ||password==null) {
		alert("Enter password");
		}
	if(isNaN(mobile)==true) {
		alert("Not valid mobile number.");
	}
	if (rpassword=="" ||rpassword==null) {
		alert("Re-enter password");
	}
	if (rpassword != password) {
		alert("Re-entered password is wrong.");
	}
	return false;
	
}

