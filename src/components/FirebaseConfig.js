import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAgF5THrgRWNfacdy25LAf60CvuON5veNs",
    authDomain: "klassprojekt-61ba9.firebaseapp.com",
    databaseURL: "https://klassprojekt-61ba9.firebaseio.com",
    projectId: "klassprojekt-61ba9",
    storageBucket: "klassprojekt-61ba9.appspot.com",
    messagingSenderId: "324511728050",
    appId: "1:324511728050:web:9e1ca548b3506cadaea4ab",
    measurementId: "G-98XW36N27P"
};

firebase.initializeApp(firebaseConfig);

//firebase.firestore().settings({ timestampsInSnapshots: true });

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export default firebase;