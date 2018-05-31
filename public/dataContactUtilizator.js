function initApp() {
 
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonSignOut').addEventListener('click', ButonSignOut, false);
	document.getElementById('ButonHartaFacultate').addEventListener('click',ButonHarta,false);
	document.getElementById('ButonProgramPrezentari').addEventListener('click', ButonProgramPrezentari, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
}

function ButonHarta() {
	window.location.href = "hartaUtilizatorSimpla.html";
}


function ButonProgramPrezentari() {
	window.location.href = "ProgramPrezentariUtilizator.html";
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

window.onload = function() {
	initApp();
}