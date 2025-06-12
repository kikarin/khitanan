import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqqxLcytNdnJXcnwht5FJQtX-VvzuSkAA",
  authDomain: "undangan-aa58d.firebaseapp.com",
  projectId: "undangan-aa58d",
  storageBucket: "undangan-aa58d.appspot.com",
  messagingSenderId: "659933077431",
  appId: "1:659933077431:web:5c268b066990e432a99232"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
