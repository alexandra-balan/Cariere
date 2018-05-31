function initApp() {

	document.getElementById('ButonLogin').addEventListener('click', ButonLogin, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonHartaFacultate').addEventListener('click', ButonHarta, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
	document.getElementById('ButonProgramPrezentari').addEventListener('click', ButonProgramPrezentari, false);
	colecteazaAnunturi();
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

function ButonContact() {
	window.location.href = "ContactVizitator.html";
}

// Trimite catre prima pagina. 
function ButonLogin() {
	window.location.href = "Homepage.html";
}

// Se executa la incarcarea paginii si afiseaza toate anunturile din baza de date.
function colecteazaAnunturi() {

	var sectionLista = document.getElementById("Lista");
	var messagesCount = 0;
	firebase.database().ref('messagesCount').once("value").then(function(snapshot) {
		messagesCount = snapshot.child("count").val();
		for (var index = messagesCount; index >= 1; index --) {
			var author = "";
			var date = "";
			var message = "";
			firebase.database().ref('messages/' + index).once("value").then(function(snapshot) {
				author = snapshot.child("author").val();
				date = snapshot.child("date").val();
				message = snapshot.child("message").val();
				var div = document.createElement("div");
				var p = document.createElement("p");
				div.innerHTML = message;
				p.innerHTML = date + " " + author;

				sectionLista.appendChild(div);
				sectionLista.appendChild(p);
			});

		}

	});
}

window.onload = function() {
	initApp();
}
