function initApp() {

	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonAnunturiUtilizator').addEventListener('click', ButonAnunturiUtilizator, false);
	document.getElementById('ButonProgramPrezentari').addEventListener('click', ButonProgramPrezentari, false);
	document.getElementById('ButonHartaFacultate').addEventListener('click',ButonHarta,false);
	document.getElementById('ButonSignOut').addEventListener('click', ButonSignOut, false);
	colecteazaWorkshopuri();
}

function ButonHarta() {
	window.location.href = "hartaUtilizatorSimpla.html";
}

function ButonProgramPrezentari() {
	window.location.href = "ProgramPrezentariUtilizator.html";
}

function ButonSignOut() {
    firebase.auth().signOut();
    window.location.href = "Homepage.html";
}

function ButonAnunturiUtilizator() {
	window.location.href = "AnunturiUtilizator.html";
}

function ButonContact() {
	window.location.href = "ContactUtilizator.html";
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

window.onload = function() {
	initApp();
}
