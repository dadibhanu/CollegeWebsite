firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function changesign(){
  var log = document.getElementById("login_div").style.display = "block";
  if(log)
  {
    document.getElementById("login_div").style.display = "none";
    document.getElementById("signup_div").style.display = "block";
  }
}

function changelog(){
  var log = document.getElementById("signup_div").style.display = "block";
  if(log)
  {
    document.getElementById("login_div").style.display = "block";
    document.getElementById("signup_div").style.display = "none";
  }
}

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
function signup()
{
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    document.getElementById("signup_div").style.display = "none";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("error: "+ errorMessage);
  });
}
function logout(){
  firebase.auth().signOut();
}
