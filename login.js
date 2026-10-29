function userlogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Fill the fields please!');
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = user.email === ADMIN_EMAIL ? './adminblog.html' : './index.html';
        })
        .catch((error) => {
            alert(`${error.code}: ${error.message}`);
        });
}
