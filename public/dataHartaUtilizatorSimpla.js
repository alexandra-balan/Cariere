function initApp() {
 
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonSignOut').addEventListener('click', ButonSignOut, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonProgramPrezentari').addEventListener('click', ButonProgramPrezentari, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
	colecteazaButoane();
	colecteazaButoane2();
	colecteazaButoane3();
	
}



function colecteazaButoane() {

	var container1 = document.getElementsByClassName("containerHarti1")[0];
	for(var i = 1; i <= 9; i++) {
		 let numar = i;
		 firebase.database().ref('Standuri/' + '1' + numar).once("value").then(function(snapshot){
			var numeClasa = snapshot.child("clasa").val();
			var status = snapshot.child("status").val();
			var buton = document.createElement("button");
			buton.classList.add(numeClasa);
			if(status == "liber")
				buton.style.color ="green";
			 else
				 buton.style.color="red";
			 buton.innerHTML = "STAND" + numar;
			 container1.appendChild(buton); 
		});
	}
}
 
 
function colecteazaButoane2() {
 
	var container1 = document.getElementsByClassName("containerHarti2")[0];
	for(var i = 1; i <= 9; i++) {
		 let numar = i;
		 firebase.database().ref('Standuri/' + '2' + numar).once("value").then(function(snapshot){
			var numeClasa = snapshot.child("clasa").val();
			var status = snapshot.child("status").val();
			var buton = document.createElement("button");
			buton.classList.add(numeClasa);
			if(status == "liber")
				buton.style.color ="green";
			 else
				 buton.style.color="red";
			 buton.innerHTML = "STAND" + numar;
			 container1.appendChild(buton); 
		});
	}
}
 

function colecteazaButoane3() {
 
	var container1 = document.getElementsByClassName("containerHarti3")[0];
	for(var i = 1; i <= 9; i++) {
		 let numar = i;
		 firebase.database().ref('Standuri/' + '3' + numar).once("value").then(function(snapshot){
			var numeClasa = snapshot.child("clasa").val();
			var status = snapshot.child("status").val();
			var buton = document.createElement("button");
			buton.classList.add(numeClasa);
			if(status == "liber")
				buton.style.color ="green";
			 else
				 buton.style.color="red";
			 buton.innerHTML = "STAND" + numar;
			 container1.appendChild(buton); 
		});
	}
}












function ButonContact() {
	window.location.href = "ContactUtilizator.html";
}


function ButonProgramWorkshopuri() {
	window.location.href = "ProgramWorkshopUtilizator.html"; 
}

function ButonProgramPrezentari() {
	window.location.href = "ProgramPrezentariUtilizator.html";
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