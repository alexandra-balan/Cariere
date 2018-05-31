function initApp() {

	document.getElementById('ButonLogin').addEventListener('click', ButonLogin, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonHartaFacultate').addEventListener('click', ButonHarta, false);
	document.getElementById('ButonAnunturiVizitator').addEventListener('click', ButonAnunturiVizitator, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshop, false);
	colecteazaPrezentari();
	//makeDummyPrezentari();
}
function ButonHarta() {
	window.location.href = "HartaVizitator.html";
}

function ButonProgramWorkshop() {
	window.location.href = "ProgramWorkshopVizitator.html";
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

function colecteazaPrezentari() {
	var sectionLista1 = document.getElementById("Ziua1");
	var prezentari1Count = 0;
	firebase.database().ref('prezentari1Count').once("value").then(function(snapshot) {
		prezentari1Count = snapshot.child("count").val();
		for (var index = 1; index <= prezentari1Count; index ++) {
			var author = "";
			var time = "";
			firebase.database().ref('prezentariZiua1/' + index).once("value").then(function(snapshot) {
				author = snapshot.child("author").val();
				time = snapshot.child("time").val();
				var p = document.createElement("p");
				p.innerHTML = time + " " + author;
				sectionLista1.appendChild(p);
			});

		}
	});

	var sectionLista2 = document.getElementById("Ziua2");
	var prezentari2Count = 0;
	firebase.database().ref('prezentari2Count').once("value").then(function(snapshot) {
		prezentari2Count = snapshot.child("count").val();
		for (var index = 1; index <= prezentari2Count; index ++) {
			var author = "";
			var time = "";
			firebase.database().ref('prezentariZiua2/' + index).once("value").then(function(snapshot) {
				author = snapshot.child("author").val();
				time = snapshot.child("time").val();
				var p = document.createElement("p");
				p.innerHTML = time + " " + author;
				sectionLista2.appendChild(p);
			});

		}
	});

	var sectionLista3 = document.getElementById("Ziua3");
	var prezentari3Count = 0;
	firebase.database().ref('prezentari3Count').once("value").then(function(snapshot) {
		prezentari3Count = snapshot.child("count").val();
		for (var index = 1; index <= prezentari3Count; index ++) {
			var author = "";
			var time = "";
			firebase.database().ref('prezentariZiua3/' + index).once("value").then(function(snapshot) {
				author = snapshot.child("author").val();
				time = snapshot.child("time").val();
				var p = document.createElement("p");
				p.innerHTML = time + " " + author;
				sectionLista3.appendChild(p);
			});

		}
	});


}

function makeDummyPrezentari() {
	var prezentari1Count = 0;
	var prezentari2Count = 0;
	var prezentari3Count = 0;

	firebase.database().ref('prezentari1Count').once("value").then(function(snapshot) {
		prezentari1Count = snapshot.child("count").val() + 1 ;
		// Formam un nou mesaj in baza de date.
		firebase.database().ref('prezentariZiua1/' + prezentari1Count).set( {
			author: "SIE",
			time: "08:30"
		});
		
		// Updatam numarul de anunturi. 
		firebase.database().ref('prezentari1Count').update({
			count: prezentari1Count
		});
	});

	firebase.database().ref('prezentari2Count').once("value").then(function(snapshot) {
		prezentari2Count = snapshot.child("count").val() + 1 ;
		// Formam un nou mesaj in baza de date.
		firebase.database().ref('prezentariZiua2/' + prezentari2Count).set( {
			author: "Sparktech",
			time: "08:30"
		});
		
		// Updatam numarul de anunturi. 
		firebase.database().ref('prezentari2Count').update({
			count: prezentari2Count
		});
	});

	firebase.database().ref('prezentari3Count').once("value").then(function(snapshot) {
		prezentari3Count = snapshot.child("count").val() + 1 ;
		// Formam un nou mesaj in baza de date.
		firebase.database().ref('prezentariZiua3/' + prezentari3Count).set( {
			author: "Amazon",
			time: "08:30"
		});
		
		// Updatam numarul de anunturi. 
		firebase.database().ref('prezentari3Count').update({
			count: prezentari3Count
		});
	});
}

window.onload = function() {
	initApp();
}
