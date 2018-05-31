function initApp() {
  Test1();
  Test2();
  Test3();
  Test4();
  // Se executa la fiecare log in sau sign out.
  firebase.auth().onAuthStateChanged(function(user) {
    
    if (user != null) { // Un user este logat.
      var lastName = document.getElementsByName("nume")[0].value;
      var firstName = document.getElementsByName("prenume")[0].value;

      if (lastName != "" && firstName != "") {
        console.log(lastName + firstName);
        user.updateProfile({
          displayName: firstName + lastName
        })
        .then(function() {
          console.log("update name");
          user.providerData.forEach(function (profile) {
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            window.location.href = "Pachete.html";
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      }
      alert("e logat");
    }
    else 
      alert("nu e logat");
  });

  document.getElementById("ButonContNou").addEventListener("click", ButonContNou);
}

function ButonContNou() {

  // Aduna datele de la intrare. 
  var email = document.getElementsByName("mail")[0].value;
  var password = document.getElementsByName("parola")[0].value;
  var phone = document.getElementsByName("telefon")[0].value;
  var nume = document.getElementsByName("nume")[0].value;
  var prenume = document.getElementsByName("prenume")[0].value;
  var companie = document.getElementsByName("companie")[0].value;

  if (email.length < 4) {
        alert('Please enter an email address.');
        return;
  }
  if (password.length < 4) {
        alert('Please enter a password.');
        return;
  }

  // Creeaza un nou user. 
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  
  // Creeaza o noua intrare in baza de date pentru user avand toate campurile de la intrare.
  firebase.database().ref('users/' + prenume + nume).set({
    email: email,
    phone: phone,
    nume: nume,
    prenume: prenume,
    companie: companie
  });
}

window.onload = function() {
  console.log("a dat de teste");
  initApp();
}

var Verificare = 0;

function testareParola(Parola) {
  Verificare = 1;
  if (Parola.length < 4)
    Verificare = 0;
  var upperCaseLetters = /[A-Z]/g;
  var lowerCaseLetters = /[a-z]/g;
  var numbers = /[0-9]/g;
  for (let i = 0; i < Parola.length; i++) {
    if(Parola[i].match(upperCaseLetters) ||
       Parola[i].match(lowerCaseLetters) ||
       Parola[i].match(numbers))
       continue;
    else {
      Verificare = 0;
      break;
    }
  }  

}

function Test1() {
  var Parola = "Ahhfd9s";
  var expectedValue = 1;
  Verificare = 0;
  testareParola(Parola);
  console.assert(Verificare == expectedValue, "A picat testul 1!");
}

function Test2() {
  var Parola = "27282829";
  var expectedValue = 0;
  Verificare = 0;
  testareParola(Parola);
  console.assert(Verificare == expectedValue, "A picat testul 2!");
}

function Test3() {
  var Parola = "2!7 282829";
  var expectedValue = 0;
  Verificare = 0;
  testareParola(Parola);
  console.assert(Verificare == expectedValue, "A picat testul 3!");
}

function Test4() {
  var Parola = "AJAJAJAJ";
  var expectedValue = 1;
  Verificare = 0;
  testareParola(Parola);
  console.assert(Verificare == expectedValue, "A picat testul 4!");
}

function Test5() {
  var Parola = "d3A";
  var expectedValue = 0;
  Verificare = 0;
  testareParola(Parola);
  console.assert(Verificare == expectedValue, "A picat testul 5!");
}