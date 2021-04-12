import * as firebase from "firebase";
require('@firebase/firestore');

  const firebaseConfig = {
    apiKey: "AIzaSyBK5GEoPVNfje_GNHKRp8Eo7YrYVr2OW5g",
    authDomain: "booksanta-a2530.firebaseapp.com",
    projectId: "booksanta-a2530",
    storageBucket: "booksanta-a2530.appspot.com",
    messagingSenderId: "885611648938",
    appId: "1:885611648938:web:1a1f6d84a1a89f6ebf7dd3",
    measurementId: "G-4KW3YNTMY3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.firestore();