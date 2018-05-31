function initApp() {
 
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonLogin').addEventListener('click', ButonLogin, false);
	document.getElementById('ButonHartaFacultate').addEventListener('click', ButonHarta, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
	document.getElementById('ButonProgramPrezentari').addEventListener('click', ButonProgramPrezentari, false);
}

function ButonHarta() {
	window.location.href = "HartaVizitator.html";
}

function ButonProgramPrezentari() {
	window.location.href = "ProgramPrezentariVizitator.html";
}

function ButonProgramWorkshopuri() {
	window.location.href = "ProgramWorkshopVizitator.html"; 
}

function ButonAnunturi() {
	window.location.href = "AnunturiVizitator.html"; 
}

function ButonLogin() {
	window.location.href = "Homepage.html";
}

window.onload = function() {
	initApp();
}