import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWhzAv8wgm_evxiKCGQD6UcvnMfFWVYnM",
    authDomain: "linkedin-clone-64604.firebaseapp.com",
    projectId: "linkedin-clone-64604",
    storageBucket: "linkedin-clone-64604.appspot.com",
    messagingSenderId: "1033967295710",
    appId: "1:1033967295710:web:7242f1c0873a54c657764f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };