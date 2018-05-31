function initApp() {

	document.getElementById('ButonSignOut').addEventListener('click', ButonSignOut, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonHartaFacultate').addEventListener('click',ButonHarta,false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshop, false);
	colecteazaPrezentari();
}
function ButonHarta() {
	window.location.href = "hartaUtilizatorSimpla.html";
}

function ButonProgramWorkshop() {
	window.location.href = "ProgramWorkshopUtilizator.html";
}

function ButonAnunturi() {
	window.location.href = "AnunturiUtilizator.html";
}

function ButonContact() {
	window.location.href = "ContactUtilizator.html";
}

function ButonSignOut() { 
    firebase.auth().signOut();
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

window.onload = function() {
	initApp();
}
