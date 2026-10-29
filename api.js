// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAOQh8buhiUDARgoCOYXQPfP4x54-uzbw",
    authDomain: "furnish-15c27.firebaseapp.com",
    projectId: "furnish-15c27",
    storageBucket: "furnish-15c27.firebasestorage.app",
    messagingSenderId: "885331205789",
    appId: "1:885331205789:web:354027ded1557a9588fe74"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const db=firebase.firestore();

const ADMIN_EMAIL = "gul@gmail.com";