import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAybSsRRqE0Ac4akMxEwF57D3bT5CXjcCc",
    authDomain: "template-musician.firebaseapp.com",
    projectId: "template-musician",
    storageBucket: "template-musician.appspot.com",
    messagingSenderId: "458245193277",
    appId: "1:458245193277:web:1140f9e2fb81b151cb3454",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
