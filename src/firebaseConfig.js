import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwIXAWPS2e1WFHQogcdto2XGq_Ws8cT2w",
  authDomain: "restaurants-app-2a9b3.firebaseapp.com",
  projectId: "restaurants-app-2a9b3",
  storageBucket: "restaurants-app-2a9b3.firebasestorage.app",
  messagingSenderId: "627834886701",
  appId: "1:627834886701:web:9f879f6d53bcff7c0576a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };