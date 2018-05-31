function initApp() {
 
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonProgramPrezentari').addEventListener('click', ButonProgramPrezentari, false);
	document.getElementById('ButonPachete').addEventListener('click', ButonPachete, false);
	document.getElementById('Alege').addEventListener('click', ButonAlege, false);
	document.getElementById('Intoarce').addEventListener('click', ButonIntoarce, false);
	
	
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
function ButonAlege()
{
	window.location.href = "OrarPrezentari1.html";
	
}
function ButonIntoarce()
{
	window.location.href = "Pachete.html";
	
}
function ButonPachete()
{
	window.location.href = "Pachete.html";
	
}
function ButonProgramWorkshopuri() {
	window.location.href = "ProgramWorkshopUtilizator.html";
}

function ButonContact() {
	window.location.href = "ContactUtilizator.html";
}


window.onload = function() {
	initApp();
}