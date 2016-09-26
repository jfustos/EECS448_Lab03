function validate()
{
	var pass1 = document.getElementById("password1").value;
	var pass2 = document.getElementById("password2").value;
	
	if( pass1.length < 8 )
	{
		alert("password needs to be at least 8 characters long!!!!");
		return;
	}
	
	if(pass1 != pass2)
	{
		alert("Please retype passwords, password field did not match validation!!!");
		return;
	}
	
	alert("Validation complete!!");
	return;
}
