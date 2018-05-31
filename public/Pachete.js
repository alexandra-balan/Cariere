function initApp() {
 
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonSignOut').addEventListener('click', ButonSignOut, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
	document.getElementById('pachet1').addEventListener('click', ButonPachet1, false);
	document.getElementById('pachet2').addEventListener('click', ButonPachet2, false);
	document.getElementById('pachet3').addEventListener('click', ButonPachet3, false);
	
	}

function ButonProgramWorkshopuri() {
	window.location.href = "ProgramWorkshopUtilizator.html"; 
}

function ButonAnunturi() {
	window.location.href = "AnunturiUtilizator.html"; 
}

function ButonSignOut() { 
    firebase.auth().signOut();
    window.location.href = "Homepage.html";
}
function ButonPachet1()
{
	window.location.href = "Pachet1.html";
	
}
function ButonPachet2()
{
	window.location.href = "Pachet2.html";
	
}
function ButonPachet3()
{
	window.location.href = "Pachet3.html";
}

window.onload = function() {
	initApp();
}