function initApp() {
 
	document.getElementById('ButonAnunturi').addEventListener('click', ButonAnunturi, false);
	document.getElementById('ButonContact').addEventListener('click', ButonContact, false);
	document.getElementById('ButonProgramPrezentari').addEventListener('click', ButonProgramPrezentari, false);
	document.getElementById('ButonProgramWorkshopuri').addEventListener('click', ButonProgramWorkshopuri, false);
	document.getElementById('butonFinal').addEventListener('click',updateButoane,false);
	document.getElementById('butonFinal').addEventListener('click',ButonFinal,false);
	colecteazaButoane();
	colecteazaButoane2();
	colecteazaButoane3();
	

}

function updateButoane(zi, nr_stand){
	
	var zi = document.getElementById("nrZi").value;
	var nr_stand = document.getElementById("nrStand").value;
	firebase.database().ref('Standuri/' + zi + nr_stand).update({
     	status:"ocupat"
	});
}

function genereazaStanduri1() {
	
	for(var i = 1; i <= 3; i++)
		for(var j = 1; j <= 9; j++) {
			var x = i * 10 + j;
			firebase.database().ref('Standuri/' + x).set({
				clasa:"buton" + x,
				status: "liber"
			});
		}
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

function ButonProgramPrezentari() {
	window.location.href = "ProgramPrezentariUtilizator.html";
}

function ButonProgramWorkshopuri() {
	window.location.href = "ProgramWorkshopUtilizator.html"; 
}


function ButonContact() {
	window.location.href = "ContactUtilizator.html";
}

function ButonAnunturi() {
	window.location.href = "AnunturiUtilizator.html"; 
}

function ButonFinal() {
	window.location.href = "AnunturiUtilizator.html"; 
}

window.onload = function() {
	initApp();
}
