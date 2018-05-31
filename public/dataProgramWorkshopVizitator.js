function initApp() {

	document.getElementById('ButonLogin').addEventListener('click', ButonLogin, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonHartaFacultate').addEventListener('click', ButonHarta, false);
	document.getElementById('ButonAnunturiVizitator').addEventListener('click', ButonAnunturiVizitator, false);
	document.getElementById('ButonProgramPrezentari').addEventListener('click', ButonProgramPrezentari, false);
	colecteazaWorkshopuri();
	//addDummyWorkshops();
}
function ButonHarta() {
	window.location.href = "HartaVizitator.html";
}

function ButonProgramPrezentari() {
	window.location.href = "ProgramPrezentariVizitator.html";
}

function ButonAnunturiVizitator() {
	window.location.href = "AnunturiVizitator.html";
}

function ButonContact() {
	window.location.href = "ContactVizitator.html";
}

// Trimite catre prima pagina. 
function ButonLogin() {
	window.location.href = "Homepage.html";
}

function colecteazaWorkshopuri() {
	var sectionLista = document.getElementById("Lista");
	var workshopsCount = 0;
	firebase.database().ref('workshopsCount').once("value").then(function(snapshot) {
		workshopsCount = snapshot.child("count").val();
		for (var index = 1; index <= workshopsCount; index ++) {
			var author = "";
			var date = "";
			var message = "";
			firebase.database().ref('workshops/' + index).once("value").then(function(snapshot) {
				author = snapshot.child("author").val();
				date = snapshot.child("date").val();
				message = snapshot.child("message").val();
				var p = document.createElement("p");
				p.innerHTML = date + " " + author + " " + message;
				sectionLista.appendChild(p);
			});

		}

	});
}

function addDummyWorkshops() {
	var workshopsCount = 0;
	firebase.database().ref('workshopsCount').once("value").then(function(snapshot) {
		workshopsCount = snapshot.child("count").val() + 1 ;
		// Formam un nou mesaj in baza de date.
		firebase.database().ref('workshops/' + workshopsCount).set( {
			author: "Anonim",
			date: "01-01-2010",
			message: "Se va tine o prezentare de proba"
		});
		
		// Updatam numarul de anunturi. 
		firebase.database().ref('workshopsCount').update({
			count: workshopsCount
		});
	});
}

window.onload = function() {
	initApp();
}
