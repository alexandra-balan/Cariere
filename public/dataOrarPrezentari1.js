function initApp()
{
	
	document.getElementById('Intoarcere').addEventListener('click',ButonIntoarce,false);
	updateButoane();
}
function updateButoane(){
	
	for (var index = 1; index <= 3; index ++) {
			let x = index;
			var statut ="";
			firebase.database().ref('buton/' + x).once("value").then(function(snapshot) {
				statut = snapshot.child("status").val();
				console.log(statut);
				console.log(x);
				var t = document.createElement("td");
				var p = document.createElement("button");
			    p.addEventListener("click", ButonAlege, false);
				if (statut != "liber") {
					p.style.backgroundColor="red";
					p.innerHTML = "Ocupat!";
				}
				else
					 p.innerHTML = "Alege!";
				t.appendChild(p);
				document.getElementById("1").appendChild(t);
				
			});
	}
	
		for (var index = 4; index <= 6; index ++) {
			let x = index;
			var statut ="";
			firebase.database().ref('buton/' + x).once("value").then(function(snapshot) {
				statut = snapshot.child("status").val();
				console.log(statut);
				console.log(x);
				var t = document.createElement("td");
				var p = document.createElement("button");
			    p.addEventListener("click", ButonAlege, false);
				if (statut != "liber") {
					p.style.backgroundColor="red";
					p.innerHTML = "Ocupat!";
				}
				else
					 p.innerHTML = "Alege!";
				t.appendChild(p);
				document.getElementById("2").appendChild(t);
				
			});
	}

			for (var index = 7; index <= 9; index ++) {
			let x = index;
			var statut ="";
			firebase.database().ref('buton/' + x).once("value").then(function(snapshot) {
				statut = snapshot.child("status").val();
				console.log(statut);
				console.log(x);
				var t = document.createElement("td");
				var p = document.createElement("button");
			    p.addEventListener("click", ButonAlege, false);
				if (statut != "liber") {
					p.style.backgroundColor="red";
					p.innerHTML = "Ocupat!";
				}
				else
					 p.innerHTML = "Alege!";
				t.appendChild(p);
				document.getElementById("3").appendChild(t);
				
			});
	}


			for (var index = 10; index <= 12; index ++) {
			let x = index;
			var statut ="";
			firebase.database().ref('buton/' + x).once("value").then(function(snapshot) {
				statut = snapshot.child("status").val();
				console.log(statut);
				console.log(x);
				var t = document.createElement("td");
				var p = document.createElement("button");
			    p.addEventListener("click", ButonAlege, false);
				if (statut != "liber") {
					p.style.backgroundColor="red";
					p.innerHTML = "Ocupat!";
				}
				else
					 p.innerHTML = "Alege!";
				t.appendChild(p);
				document.getElementById("4").appendChild(t);
				
			});
	}
	for (var index = 13; index <= 15; index ++) {
			let x = index;
			var statut ="";
			firebase.database().ref('buton/' + x).once("value").then(function(snapshot) {
				statut = snapshot.child("status").val();
				console.log(statut);
				console.log(x);
				var t = document.createElement("td");
				var p = document.createElement("button");
			    p.addEventListener("click", ButonAlege, false);
				if (statut != "liber") {
					p.style.backgroundColor="red";
					p.innerHTML = "Ocupat!";
				}
				else
					 p.innerHTML = "Alege!";
				t.appendChild(p);
				document.getElementById("5").appendChild(t);
				
			});
	}
	
 
}

function ButonAlege(){
	
	this.value = "Ocupat";
	this.style.backgroundColor="red";
	/*firebase.database().ref('buton/'+this).update({status:"ocupat"});*/
	window.location.href = "AnunturiUtilizator.html";
	}

function MakeDummyIntervale(){

		for(var i=1; i<=15;i++)
		{
			let x = i;
			firebase.database().ref('buton/'+x).set({status:"liber"});
		}
}

function ButonIntoarce()
{
	window.location.href="Pachete.html";
}

window.onload = function() 
{
	initApp();
}

