import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyBK88hrDK6jTy4154tjlFm_7QES-kvnm2g",
  authDomain: "greencab-80974.firebaseapp.com",
  projectId: "greencab-80974",
  storageBucket: "greencab-80974.appspot.com",
  messagingSenderId: "534334512091",
  appId: "1:534334512091:web:49540b1d8b13dc879ea5fe",
  measurementId: "G-G0MERQGRLP"
};

const devConfig = {
  apiKey: "AIzaSyBK88hrDK6jTy4154tjlFm_7QES-kvnm2g",
  authDomain: "greencab-80974.firebaseapp.com",
  projectId: "greencab-80974",
  storageBucket: "greencab-80974.appspot.com",
  messagingSenderId: "534334512091",
  appId: "1:534334512091:web:49540b1d8b13dc879ea5fe",
  measurementId: "G-G0MERQGRLP"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
