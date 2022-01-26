import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCtMFEyKM8s02GgN4vXyymVLeN55cCidx8",
    authDomain: "clothing-db-10a46.firebaseapp.com",
    projectId: "clothing-db-10a46",
    storageBucket: "clothing-db-10a46.appspot.com",
    messagingSenderId: "799320694607",
    appId: "1:799320694607:web:18826db8f126289fce6f3a",
    measurementId: "G-E5FM0CQGHW"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;