import firebase from "firebase";

const prodConfig = {
  apiKey: "AIzaSyDMja1nY2576mdZka0br2eXmPBm1TXCHCo",
  authDomain: "checkr-staff-manager.firebaseapp.com",
  databaseURL:
    "https://checkr-staff-manager-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "checkr-staff-manager",
  storageBucket: "checkr-staff-manager.appspot.com",
  messagingSenderId: "982906521380",
  appId: "1:982906521380:web:f78d6ac23a0a33fbec55b1",
};

const devConfig = {
  apiKey: "AIzaSyDMja1nY2576mdZka0br2eXmPBm1TXCHCo",
  authDomain: "checkr-staff-manager.firebaseapp.com",
  databaseURL:
    "https://checkr-staff-manager-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "checkr-staff-manager",
  storageBucket: "checkr-staff-manager.appspot.com",
  messagingSenderId: "982906521380",
  appId: "1:982906521380:web:f78d6ac23a0a33fbec55b1",
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
