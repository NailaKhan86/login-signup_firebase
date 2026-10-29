function userregister(){
        let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(email=='' || password=='' ){
        alert('Fill the fields first')
    }else{
          firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("User register successfully")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode + errorMessage)
    // ..
  });
    }
}