import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWWQbhKMkY0DvYMXGfmmr3A1YFtwocWGA",
    authDomain: "line-app-tutorial.firebaseapp.com",
    projectId: "line-app-tutorial",
    storageBucket: "line-app-tutorial.appspot.com",
    messagingSenderId: "458405446530",
    appId: "1:458405446530:web:1f65ab1437203c042d859b"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
