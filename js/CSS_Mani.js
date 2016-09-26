function change()
{
	var textBOX      = document.getElementById("textBOX");
	var boarderRED   = document.getElementById("BoRED").value;
	var boarderGREEN = document.getElementById("BoGREEN").value;
	var boarderBLUE  = document.getElementById("BoBLUE").value;
	var backRED      = document.getElementById("BackRED").value;
	var backGREEN    = document.getElementById("BackGREEN").value;
	var backBLUE     = document.getElementById("BackBLUE").value;
	
	if(  boarderRED.length != 2   || boarderRED.search(/[0-9ABCDEF]{2}/)
	  || boarderGREEN.length != 2 || boarderGREEN.search(/[0-9ABCDEF]{2}/)
	  || boarderBLUE.length != 2  || boarderBLUE.search(/[0-9ABCDEF]{2}/)
	  || backRED.length != 2      || backRED.search(/[0-9ABCDEF]{2}/)
	  || backGREEN.length != 2    || backGREEN.search(/[0-9ABCDEF]{2}/)
	  || backBLUE.length != 2     || backBLUE.search(/[0-9ABCDEF]{2}/)
	)
	{
		alert("improper input.");
		return;
	}
	
	var newBack = "#" + backRED + backGREEN + backBLUE;
	var newBoarder = "thick solid #" + boarderRED + boarderGREEN + boarderBLUE;
	
	textBOX.style.backgroundColor = newBack;
	textBOX.style.border = newBoarder;
	return;
}
