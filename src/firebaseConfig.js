import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJlPohkgJwJ0a5x4tjKbvc5TdoezrCCpk",
    authDomain: "gotovo-test-1.firebaseapp.com",
    databaseURL: "https://gotovo-test-1.firebaseio.com",
    projectId: "gotovo-test-1",
    storageBucket: "gotovo-test-1.appspot.com",
    messagingSenderId: "708005978790",
    appId: "1:708005978790:web:1e6efb1eb8250485288a67"
}


firebase.initializeApp(firebaseConfig);

export default firebase;