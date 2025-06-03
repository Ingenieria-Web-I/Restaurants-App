
import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJ5xMuJqYu31E4v6H7Sn-LShnPXb5QYkI",
    authDomain: "restaurants-app-5a688.firebaseapp.com",
    projectId: "restaurants-app-5a688",
    storageBucket: "restaurants-app-5a688.firebasestorage.app",
    messagingSenderId: "906824328905",
    appId: "1:906824328905:web:37b77596413ed4a51b8f18"
};


const FirebaseApp = initializeApp(firebaseConfig);

const FirebaseFirestore = getFirestore(FirebaseApp);

export {
    FirebaseFirestore
}
